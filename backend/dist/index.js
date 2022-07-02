"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const app = (0, express_1.default)();
app.get(/.js/, express_1.default.static((0, path_1.join)(__dirname, 'public')));
app.use('*', (_req, res) => {
    res.sendFile((0, path_1.join)(__dirname, './public/index.html'));
});
app.listen(8000, () => {
    console.log(`running 8000`);
});
