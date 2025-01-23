import { Request, Response } from "express";
import { createPet } from "../models/Pet";


export const createPetController = (req: Request, res: Response) => {
  const { name, type, description, deadlineVaccination } = req.body;
  const petshop = req.petshop;  //middleware

  if (!name || !type || !description || !deadlineVaccination) {
    return res.status(400).json({ error: "nome, tipo do animal, descrição e as infromçaões de vacinação são campos obrigatórios" });
  }

  const newPet = createPet(name, type, description, deadlineVaccination);
  petshop.pets.push(newPet);
  
  return res.status(201).json({ message: "Pet criado com sucesso", pet: newPet });

};

export const updateVaccinatedStatus = (req: Request, res: Response) => {
    const { id } = req.params; 
    const petshop = req.petshop;
    console.log( id); 
  //no Pet que possuir um id igual ao id presente nos parâmetros da rota.
  const pet = petshop.pets.find((p) => p.id === id);
    if (!pet) {
      return res.status(404).json({ error: "Pet não encontrado." });
    }
  

    pet.vaccinated = true;
  
    return res.status(200).json(pet);
  };

 

export const deletePet = (req: Request, res: Response) => {
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
