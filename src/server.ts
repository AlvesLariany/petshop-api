import express from 'express';
import { uuid } from 'uuidv4';

const app= express();
app.use(express.json());

const petshops: Array<{
    id: string;
    name: string;
    cnpj: string;
    pets: Array<any>;
  }> = [];


const validCNPJ = (cnpj: string): boolean => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
    return cnpjRegex.test(cnpj);
  };
  
app.post('/petshop', (req,res)=>{
  const {name, cnpj} = req.body; 
   
  if (!name || !cnpj) {
    return res.status(400).json({
      error: 'Informe o nome e o CNPJ do petshop',
    });
  }


  if (!validCNPJ(cnpj)) {
    return res.status(400).json({
      error: 'O CNPJ deve ser informado no seguinte formato: XX.XXX.XXX/0001-XX.',
    });
  }

  
  const petshopExists = petshops.find((petshop) => petshop.cnpj === cnpj);
  if (petshopExists) {
    return res.status(400).json({
      error: 'Já existe um petshop com esse CNPJ.',
    });
  }


  const newPetshop = {
    id: uuid(),
    name,
    cnpj,
    pets: [], 
  };

  petshops.push(newPetshop);
  return res.status(201).json(newPetshop);
});

// Rota GET /pets
app.get('/pets', (req, res)=>{

})
app.listen(3333, () => {console.log('server running on port 3333');});




