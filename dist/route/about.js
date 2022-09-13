"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutRoute = void 0;
const express_1 = __importDefault(require("express"));
const aboutRoute = express_1.default.Router();
exports.aboutRoute = aboutRoute;
aboutRoute.get('/', (req, res) => {
    res.json({
        name: 'Assami Muzaki',
        age: 20,
        hobby: 'code',
        married: false
    });
});
