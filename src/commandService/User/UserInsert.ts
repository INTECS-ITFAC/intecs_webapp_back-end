const assert = require("assert");
import dbInsertOne from "../../database/InsertOne";
import checkExistence from "../../database/CheckExistence";
import { user } from "../../models/UserTypes";
import { mail } from "../../models/MailTypes";
const bcrypt = require("bcryptjs");
var generator = require("generate-password");
const nodemailer = require("nodemailer");
import { EMAIL, PASSWORD } from "../../config/constants";
const collectionName = "Users";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
    authentication: "plain",
  },
});

const createUser = (data: user, callback: any) => {
  let currentDate: Date = new Date();
  const user: user = {
    createdBy: data.createdBy,
    email: data.email,
    password: "",
    saltSecret: "",
    date: currentDate,
  };

  checkExistence(collectionName, user.email, (isExist: any) => {
    if (isExist) callback(false, "This email is already registered.", null);
    else {
      var password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
      });

      bcrypt.genSalt(10, function (err: any, salt: any) {
        bcrypt.hash(password, salt, (err: any, hash: any) => {
          user.password = hash;
          user.saltSecret = salt;
        });
      });

      dbInsertOne(user, collectionName, (result: any) => {
        let users: user = result;
        let mail: mail = {
          from: EMAIL,
          to: user.email,
          subject: "Intecs Web Site Loging Credentials",
          html:
            "<h1>Hello !</h1></br><p>The password for your Intecs account on Intecs Web.</p></br>" +
            password,
        };
        transporter.sendMail(mail, function (error: any, info: any) {
          assert.equal(error, null);
          delete user.password;
          delete user.saltSecret;
          callback(true, "success", user);
        });
      });
    }
  });
};

export default createUser;
