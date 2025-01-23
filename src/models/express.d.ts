type Pet = {
  id: string;
  name: string;
  type: string; //talvez um enum
  description: string;
  vaccinated: boolean;
  deadlineVaccination: string;
  created: Date;
};

type Petshop = {
  id: string;
  name: string;
  cnpj: string;
  pets: Pet[];
};

declare namespace Express {
    export interface Request {
      petshop: Petshop;
      pet: Pet;
    }
  }