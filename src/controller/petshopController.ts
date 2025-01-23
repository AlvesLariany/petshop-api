import { Request, Response } from "express";
import { createPetshop, Petshop } from "../models/Petshop";
import { validateCNPJ } from "../validator/validateCNPJ"; 
import { cnpjExists } from "../validator/cnpjExists";
import { petshops } from "../models/arraypet"; 
export const createPetshopController = (req: Request, res: Response) => {
  const { name, cnpj } = req.body;
  if (!validateCNPJ(cnpj)) {
    return res.status(400).json({ error: "Formato de CNPJ inválido" });
  }


  if (cnpjExists(cnpj)) {
    return res.status(400).json({ error: "Esse CNPJ já existe" });
  }

 
  const newPetshop = createPetshop(name, cnpj);
  petshops.push(newPetshop);

  return res.status(201).json(newPetshop); 
};

export const listPetsController = (req: Request, res: Response) => {
  const petshop = req.petshop; 
  return res.json(petshop.pets);
};
