"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const logger_1 = require("../middleware/logger");
const errorHandler_1 = require("../middleware/errorHandler");
const productRoutes_1 = __importDefault(require("../routes/productRoutes"));
const helmet_1 = __importDefault(require("helmet"));
const orderRoutes_1 = __importDefault(require("../routes/orderRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const config_1 = require("../config/config");
const path = require('path');
const cors = require('cors');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, helmet_1.default)());
        this.app.use(cors());
        this.app.use(cors({
            origin: ['http://localhost:4200'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
        }));
        this.initializeSwagger();
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
        this.serveImages();
    }
    initializeSwagger() {
        const swaggerDocs = (0, swagger_jsdoc_1.default)(config_1.swaggerOptions);
        this.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(logger_1.logger);
    }
    initializeRoutes() {
        this.app.use('/api/products', productRoutes_1.default);
        this.app.use('/api/orders', orderRoutes_1.default);
    }
    initializeErrorHandling() {
        this.app.use(errorHandler_1.errorHandler);
    }
    serveImages() {
        this.app.use('/images', express_1.default.static(path.join(__dirname, 'assets', 'images')));
    }
}
exports.App = App;
