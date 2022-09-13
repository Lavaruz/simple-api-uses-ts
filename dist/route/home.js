"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = void 0;
const express_1 = __importDefault(require("express"));
const homeRoute = express_1.default.Router();
exports.homeRoute = homeRoute;
homeRoute.get('/', (req, res) => {
    res.json({ message: 'this is created with ts file' });
});
