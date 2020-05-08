import { dbUrl } from "../config/constants";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const dbName = "intect_web";
let db;

const dbConnection = (callback: any) => {
  MongoClient.connect(dbUrl, (err: any, client: any) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    callback(db);
  });
};

export default dbConnection;
