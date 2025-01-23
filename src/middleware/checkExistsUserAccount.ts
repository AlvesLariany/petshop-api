import { Request, Response, NextFunction } from "express";
import { Petshop } from "../models/Petshop";
import { petshops } from "../models/arraypet"

//Portanto, para que essa rota lista todos pets, é necessário pegar o Petshop que foi repassado o cnpj no header do request 

export const checkExistsUserAccount = (req: Request,res: Response,next: NextFunction) => {
  const cnpj = req.headers['cnpj'] 
  console.log(req.headers);

  
  if (!cnpj || typeof cnpj !== 'string') {
    return res.status(400).json({ error: "CNPJ é obrigatório no header." });
  }

  const petshop = petshops.find((p) => p.cnpj === cnpj);

  if (!petshop) {
    return res.status(404).json({ error: "Petshop não encontrado." });
  }

  req.petshop = petshop;

  next();
};
