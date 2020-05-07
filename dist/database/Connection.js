"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../config/constants");
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var dbName = "Intect_Web";
var db;
var dbConnection = function (callback) {
  MongoClient.connect(constants_1.dbUrl, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    callback(db);
  });
};
exports.default = dbConnection;
