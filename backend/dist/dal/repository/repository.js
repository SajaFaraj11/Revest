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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(dbAdapter) {
        this.dbAdapter = dbAdapter;
    }
    getAll(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbAdapter.getAll(model);
        });
    }
    create(model, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbAdapter.create(model, data);
        });
    }
    update(model, id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dbAdapter.update(model, id, data);
        });
    }
    remove(model, id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dbAdapter.remove(model, id);
        });
    }
}
exports.Repository = Repository;
