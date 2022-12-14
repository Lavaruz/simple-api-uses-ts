"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const home_1 = require("./route/home");
const about_1 = require("./route/about");
app.use('/', home_1.homeRoute);
app.use('/about', about_1.aboutRoute);
app.listen(3000, () => {
    console.log('runrning at port 3000');
});
