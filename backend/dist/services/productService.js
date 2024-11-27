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
exports.ProductService = void 0;
const repository_1 = require("../dal/repository/repository");
const postgresAdapter_1 = require("../dal/adapters/postgresAdapter");
const productModel_1 = __importDefault(require("../models/productModel"));
const productRepository = new repository_1.Repository(postgresAdapter_1.postgresAdapter);
exports.ProductService = {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.getAll(productModel_1.default);
            }
            catch (err) {
                throw err;
            }
        });
    },
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.create(productModel_1.default, productData);
            }
            catch (err) {
                throw err;
            }
        });
    },
    updateProduct(productId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield productRepository.update(productModel_1.default, productId, updateData);
            }
            catch (err) {
                throw err;
            }
        });
    },
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield productRepository.remove(productModel_1.default, productId);
            }
            catch (err) {
                throw err;
            }
        });
    },
    initializeProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let productCount = yield productRepository.count(productModel_1.default);
                if (productCount === 0) {
                    var products = [
                        {
                            name: "Men's Formal Shirt",
                            description: "Slim fit formal shirt made from premium cotton.",
                            price: 29.99,
                            discount: 10,
                            stock: 50,
                            category: "Clothing",
                            brandName: "Arrow",
                            imageUrl: "/assets/images/p1.png",
                            weight: 0.3,
                            isActive: true,
                            createdAt: new Date("2024-07-01"),
                            updatedAt: new Date("2024-11-20")
                        },
                        {
                            name: "Women's Evening Dress",
                            description: "Elegant long evening dress with lace detailing.",
                            price: 79.99,
                            discount: 15,
                            stock: 20,
                            category: "Clothing",
                            brandName: "Zara",
                            imageUrl: '/assets/images/p4.png',
                            weight: 0.6,
                            isActive: true,
                            createdAt: new Date("2024-06-10"),
                            updatedAt: new Date("2024-11-22")
                        },
                        {
                            name: "Men's Casual Shirt",
                            description: "Comfortable casual shirt perfect for outings.",
                            price: 24.99,
                            discount: 5,
                            stock: 70,
                            category: "Clothing",
                            brandName: "H&M",
                            imageUrl: "/assets/images/p2.png",
                            weight: 0.35,
                            isActive: true,
                            createdAt: new Date("2024-08-01"),
                            updatedAt: new Date("2024-11-15")
                        },
                        {
                            name: "Women's Summer Dress",
                            description: "Lightweight summer dress with floral patterns.",
                            price: 39.99,
                            discount: null,
                            stock: 40,
                            category: "Clothing",
                            brandName: "Forever 21",
                            imageUrl: "/assets/images/p3.png",
                            weight: 0.4,
                            isActive: true,
                            createdAt: new Date("2024-05-15"),
                            updatedAt: new Date("2024-10-30")
                        },
                        {
                            name: "Men's Denim Shirt",
                            description: "Classic denim shirt with snap buttons.",
                            price: 49.99,
                            discount: 10,
                            stock: 30,
                            category: "Clothing",
                            brandName: "Levi's",
                            imageUrl: "/assets/images/p8.png",
                            weight: 0.5,
                            isActive: true,
                            createdAt: new Date("2024-09-05"),
                            updatedAt: new Date("2024-11-12")
                        },
                        {
                            name: "Women's Cocktail Dress",
                            description: "Stylish cocktail dress for special occasions.",
                            price: 89.99,
                            discount: 20,
                            stock: 15,
                            category: "Clothing",
                            brandName: "Calvin Klein",
                            imageUrl: "/assets/images/p6.png",
                            weight: 0.7,
                            isActive: true,
                            createdAt: new Date("2024-03-25"),
                            updatedAt: new Date("2024-10-01")
                        },
                        {
                            name: "Men's Polo Shirt",
                            description: "Classic polo shirt for casual wear.",
                            price: 19.99,
                            discount: 5,
                            stock: 60,
                            category: "Clothing",
                            brandName: "Ralph Lauren",
                            imageUrl: "/assets/images/p10.png",
                            weight: 0.25,
                            isActive: true,
                            createdAt: new Date("2024-04-01"),
                            updatedAt: new Date("2024-10-20")
                        },
                        {
                            name: "Women's Maxi Dress",
                            description: "Flowy maxi dress with vibrant colors.",
                            price: 59.99,
                            discount: null,
                            stock: 25,
                            category: "Clothing",
                            brandName: "Mango",
                            imageUrl: "/assets/images/p12.png",
                            weight: 0.5,
                            isActive: true,
                            createdAt: new Date("2024-07-10"),
                            updatedAt: new Date("2024-11-05")
                        },
                        {
                            name: "Men's Linen Shirt",
                            description: "Breathable linen shirt for hot weather.",
                            price: 34.99,
                            discount: null,
                            stock: 40,
                            category: "Clothing",
                            brandName: "Uniqlo",
                            imageUrl: "/assets/images/p9.png",
                            weight: 0.3,
                            isActive: true,
                            createdAt: new Date("2024-06-01"),
                            updatedAt: new Date("2024-10-15")
                        },
                        {
                            name: "Women's Formal Dress",
                            description: "Professional formal dress suitable for work.",
                            price: 69.99,
                            discount: 10,
                            stock: 35,
                            category: "Clothing",
                            brandName: "Banana Republic",
                            imageUrl: "/assets/images/p7.png",
                            weight: 0.55,
                            isActive: true,
                            createdAt: new Date("2024-08-15"),
                            updatedAt: new Date("2024-11-01")
                        },
                        {
                            name: "Men's Flannel Shirt",
                            description: "Warm flannel shirt for winter wear.",
                            price: 29.99,
                            discount: 5,
                            stock: 50,
                            category: "Clothing",
                            brandName: "Timberland",
                            imageUrl: "/assets/images/p11.png",
                            weight: 0.4,
                            isActive: true,
                            createdAt: new Date("2024-01-25"),
                            updatedAt: new Date("2024-11-10")
                        },
                        {
                            name: "Women's Wrap Dress",
                            description: "Trendy wrap dress with adjustable fit.",
                            price: 49.99,
                            discount: 15,
                            stock: 30,
                            category: "Clothing",
                            brandName: "ASOS",
                            imageUrl: "/assets/images/p5.png",
                            weight: 0.6,
                            isActive: true,
                            createdAt: new Date("2024-05-20"),
                            updatedAt: new Date("2024-10-25")
                        }
                    ];
                    products.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                        yield productRepository.create(productModel_1.default, element);
                    }));
                }
            }
            catch (err) {
                throw err;
            }
        });
    },
};
