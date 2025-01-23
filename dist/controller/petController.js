"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.updateVaccinatedStatus = exports.createPetController = void 0;
const Pet_1 = require("../models/Pet");
const createPetController = (req, res) => {
    const { name, type, description, deadlineVaccination } = req.body;
    const petshop = req.petshop; //middleware
    if (!name || !type || !description || !deadlineVaccination) {
        return res.status(400).json({ error: "nome, tipo do animal, descrição e as infromçaões de vacinação são campos obrigatórios" });
    }
    const newPet = (0, Pet_1.createPet)(name, type, description, deadlineVaccination);
    petshop.pets.push(newPet);
    return res.status(201).json({ message: "Pet criado com sucesso", pet: newPet });
};
exports.createPetController = createPetController;
const updateVaccinatedStatus = (req, res) => {
    const { id } = req.params;
    const petshop = req.petshop;
    console.log(id);
    //no Pet que possuir um id igual ao id presente nos parâmetros da rota.
    const pet = petshop.pets.find((p) => p.id === id);
    if (!pet) {
        return res.status(404).json({ error: "Pet não encontrado." });
    }
    pet.vaccinated = true;
    return res.status(200).json(pet);
};
exports.updateVaccinatedStatus = updateVaccinatedStatus;
const deletePet = (req, res) => {
    const { id } = req.params;
    const petshop = req.petshop;
    if (!petshop || !petshop.pets) {
        return res.status(404).json({ error: "Petshop não encontrado" });
    }
    const petIndex = petshop.pets.findIndex((p) => p.id === id);
    if (petIndex === -1) {
        return res.status(404).json({ error: "Pet não encontrado" });
    }
    petshop.pets.splice(petIndex, 1);
    return res.status(200).json(petshop.pets);
};
exports.deletePet = deletePet;
