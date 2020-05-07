"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var InsertOne_1 = __importDefault(require("../database/InsertOne"));
var collectionName = "Events";
var createEvent = function (data, callback) {
  var event = {
    title: data.title,
    imgUrl: data.imgUrl,
    description: data.description,
  };
  InsertOne_1.default(event, collectionName, function (result) {
    callback(result.ops);
  });
};
exports.default = createEvent;
