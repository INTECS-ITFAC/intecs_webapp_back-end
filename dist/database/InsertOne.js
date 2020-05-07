"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('assert');
var Connection_1 = __importDefault(require("./Connection"));
var MongoClient = require('mongodb').MongoClient;
var dbInsertOne = function (data, collectionName, callback) {
    Connection_1.default(function (db, err) {
        assert.equal(err, null);
        var collection = db.collection(collectionName);
        collection.insertOne(data, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            assert.equal(1, result.ops.length);
            console.log("Inserted 1 documents into the collection");
            callback(result);
        });
    });
};
exports.default = dbInsertOne;
