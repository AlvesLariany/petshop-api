import {uuid} from 'uuidv4';


export interface Pet {
    id: string;
    name: string;
    type: string; //talvez um enum
    description: string;
    vaccinated: boolean;
    deadlineVaccination: string;
    created: Date;
  };
  

  export const createPet = (name: string, type: string, description: string, deadlineVaccination: string): Pet => ({
    id: uuid(),
    name,
    type,
    description,
    vaccinated: false,
    deadlineVaccination: new Date(deadlineVaccination).toISOString(),
    created: new Date(),
  });