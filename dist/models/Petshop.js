"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPetshop = void 0;
const uuidv4_1 = require("uuidv4");
;
const createPetshop = (name, cnpj) => ({
    id: (0, uuidv4_1.uuid)(),
    name,
    cnpj,
    pets: [],
});
exports.createPetshop = createPetshop;
