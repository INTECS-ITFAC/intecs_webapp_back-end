"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../../controllers");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.post('/', function (req, res) {
    controllers_1.userController.create(req, res);
});
exports.router.get('/', function (req, res) {
    controllers_1.userController.read(req, res);
});
exports.router.patch('/', function (req, res) {
    controllers_1.userController.update(req, res);
});
exports.router.delete('/', function (req, res) {
    controllers_1.userController.delete(req, res);
});
