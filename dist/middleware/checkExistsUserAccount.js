"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistsUserAccount = void 0;
const arraypet_1 = require("../models/arraypet");
//Portanto, para que essa rota lista todos pets, é necessário pegar o Petshop que foi repassado o cnpj no header do request 
const checkExistsUserAccount = (req, res, next) => {
    const cnpj = req.headers['cnpj'];
    console.log(req.headers);
    if (!cnpj || typeof cnpj !== 'string') {
        return res.status(400).json({ error: "CNPJ é obrigatório no header." });
    }
    const petshop = arraypet_1.petshops.find((p) => p.cnpj === cnpj);
    if (!petshop) {
        return res.status(404).json({ error: "Petshop não encontrado." });
    }
    req.petshop = petshop;
    next();
};
exports.checkExistsUserAccount = checkExistsUserAccount;
