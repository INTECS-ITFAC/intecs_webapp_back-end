"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Connection_1 = __importDefault(require("./Connection"));
var dbGetAll = function (collectionName, callback) {
  Connection_1.default(function (db, err) {
    assert.equal(err, null);
    var collection = db.collection(collectionName);
    collection.find({}).toArray(function (err, result) {
      assert.equal(err, null);
      callback(result);
    });
  });
};
exports.default = dbGetAll;
