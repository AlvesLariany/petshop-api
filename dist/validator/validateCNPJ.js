"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCNPJ = void 0;
const validateCNPJ = (cnpj) => {
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj);
};
exports.validateCNPJ = validateCNPJ;
