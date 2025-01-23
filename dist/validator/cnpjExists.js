"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnpjExists = void 0;
const petshops = [];
const cnpjExists = (cnpj) => {
    return petshops.some((p) => p.cnpj === cnpj);
};
exports.cnpjExists = cnpjExists;
