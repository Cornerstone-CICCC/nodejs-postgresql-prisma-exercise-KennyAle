"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', product_routes_1.default);
app.use((req, res) => {
    res.status(404).send('Page not found');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
