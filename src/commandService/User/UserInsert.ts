const assert = require("assert");
import dbInsertOne from "../../database/InsertOne";
import checkExistence from "../../database/CheckExistence";
import { user } from "../../models/UserTypes";
import { mail } from "../../models/MailTypes";
const bcrypt = require("bcryptjs");
var generator = require("generate-password");
import { EMAIL, SENDGRID_API_KEY } from "../../config/constants";
const collectionName = "Users";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

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
          to: user.email,
          from: EMAIL,
          subject: "Intecs Web Site Loging Credentials",
          html:
            "<h1>Hello !</h1></br><p>The password for your Intecs account on Intecs Web.</p></br>" +
            password,
        };

        (async () => {
          try {
            await sgMail.send(mail, (error: any, info: any) => {
              assert.equal(error, null);
              delete user.password;
              delete user.saltSecret;

              callback(true, "success", user);
            });
          } catch (error) {
            console.error(error);

            if (error.response) {
              console.error(error.response.body);
            }
          }
        })();
      });
    }
  });
};

export default createUser;
