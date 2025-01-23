"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPetsController = exports.createPetshopController = void 0;
const Petshop_1 = require("../models/Petshop");
const validateCNPJ_1 = require("../validator/validateCNPJ");
const cnpjExists_1 = require("../validator/cnpjExists");
const arraypet_1 = require("../models/arraypet");
const createPetshopController = (req, res) => {
    const { name, cnpj } = req.body;
    if (!(0, validateCNPJ_1.validateCNPJ)(cnpj)) {
        return res.status(400).json({ error: "Formato de CNPJ inválido" });
    }
    if ((0, cnpjExists_1.cnpjExists)(cnpj)) {
        return res.status(400).json({ error: "Esse CNPJ já existe" });
    }
    const newPetshop = (0, Petshop_1.createPetshop)(name, cnpj);
    arraypet_1.petshops.push(newPetshop);
    return res.status(201).json(newPetshop);
};
exports.createPetshopController = createPetshopController;
const listPetsController = (req, res) => {
    const petshop = req.petshop;
    return res.json(petshop.pets);
};
exports.listPetsController = listPetsController;
