"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User/User");
var Event_1 = require("./Event/Event");
var userController = new User_1.UserController();
exports.userController = userController;
var eventController = new Event_1.EventController();
exports.eventController = eventController;
