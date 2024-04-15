import express from "express";
import {getClients,createClient,getClient,deleteClient,updateClient} from "../controllers/clients.js";

const router= express.Router();

router.get("/clients",getClients);
router.post("/client",createClient);
router.get("/client/:id",getClient);
router.delete("/client/:id",deleteClient);
router.put("/client/:id",updateClient);



export default router;