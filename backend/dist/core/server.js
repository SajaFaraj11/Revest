"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const app_1 = require("./app");
const config_1 = require("../config/config");
const postgres_1 = __importDefault(require("../db/postgres"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
const productModel_1 = __importDefault(require("../models/productModel"));
class Server {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            const appInstance = new app_1.App();
            try {
                postgres_1.default.models.Product = productModel_1.default;
                postgres_1.default.models.Order = orderModel_1.default;
                yield postgres_1.default.authenticate()
                    .then(() => {
                    console.log('Database connected!');
                    postgres_1.default.sync({ force: true })
                        .then(() => console.log('Database synced successfully'))
                        .catch((err) => console.error('Error syncing database:', err));
                })
                    .catch((err) => console.error('Unable to connect to the database:', err));
                // Start the server
                appInstance.app.listen(config_1.config.port, () => {
                    console.log(`Server running at http://localhost:${config_1.config.port}`);
                });
            }
            catch (error) {
                console.error('Failed to start the server:', error);
            }
        });
    }
}
exports.Server = Server;
