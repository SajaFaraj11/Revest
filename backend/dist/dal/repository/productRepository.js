"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresAdapter_1 = require("../adapters/postgresAdapter");
const repository_1 = require("./repository");
const productRepository = new repository_1.Repository(postgresAdapter_1.postgresAdapter);
exports.default = productRepository;
