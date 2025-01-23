import { Petshop } from "../models/Petshop";


const petshops: Petshop[] = [];

export const cnpjExists= (cnpj: string): boolean => {
  return petshops.some((p) => p.cnpj === cnpj);
};


