import { Router } from "express";
import { createPetshopController, listPetsController } from "../controller/petshopController";
import { createPetController } from "../controller/petController";
import { checkExistsUserAccount } from "../middleware/checkExistsUserAccount";
import {updateVaccinatedStatus } from '../controller/petController';
import { deletePet } from "../controller/petController";
import { cnpjExists } from "../validator/cnpjExists"; 

const router = Router();

router.post("/petshop", createPetshopController);
router.get("/pets", checkExistsUserAccount, listPetsController); 
router.post("/pets", checkExistsUserAccount, createPetController);

router.patch("/pets/:id/vaccinated", checkExistsUserAccount, updateVaccinatedStatus);
router.delete("/pets/:id",  checkExistsUserAccount, deletePet)
export default router;
