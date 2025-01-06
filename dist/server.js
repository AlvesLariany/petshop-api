"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuidv4_1 = require("uuidv4");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const petshops = [];
const validCNPJ = (cnpj) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return cnpjRegex.test(cnpj);
};
app.post('/petshop', (req, res) => {
    const { name, cnpj } = req.body; //o cadastro precisa ser feito por meio do nome e CNPJ
    if (!name || !cnpj) {
        return res.status(400).json({
            error: 'Informe o nome e o CNPJ do petshop',
        });
    }
    if (!validCNPJ(cnpj)) {
        return res.status(400).json({
            error: 'O CNPJ deve ser informado no seguinte formato: XX.XXX.XXX/0001-XX.',
        });
    }
    const petshopExists = petshops.find((petshop) => petshop.cnpj === cnpj);
    if (petshopExists) {
        return res.status(400).json({
            error: 'Já existe um petshop com esse CNPJ.',
        });
    }
    const newPetshop = {
        id: (0, uuidv4_1.uuid)(),
        name,
        cnpj,
        pets: [],
    };
    petshops.push(newPetshop);
    return res.status(201).json(newPetshop);
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3333 🚀');
});
app.listen(3333);
