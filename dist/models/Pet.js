"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPet = void 0;
const uuidv4_1 = require("uuidv4");
;
const createPet = (name, type, description, deadlineVaccination) => ({
    id: (0, uuidv4_1.uuid)(),
    name,
    type,
    description,
    vaccinated: false,
    deadlineVaccination: new Date(deadlineVaccination).toISOString(),
    created: new Date(),
});
exports.createPet = createPet;
