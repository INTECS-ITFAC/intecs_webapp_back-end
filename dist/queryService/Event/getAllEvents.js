"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var GetAll_1 = __importDefault(require("../../database/GetAll"));
var collectionName = "Events";
var getAllEvents = function (callback) {
  GetAll_1.default(collectionName, function (result) {
    callback(result);
  });
};
exports.default = getAllEvents;
