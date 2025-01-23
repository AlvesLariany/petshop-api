
import {Pet} from './Pet';
import {uuid} from 'uuidv4';

export interface Petshop {
    id: string;
    name: string;
    cnpj: string;
    pets:Array<Pet>;
  };
  

  export const createPetshop = (name: string, cnpj: string): Petshop => ({
    id: uuid(),
    name,
    cnpj,
    pets: [],
  });