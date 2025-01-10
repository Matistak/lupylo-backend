import { Router } from "express";
import { getListUsuarios } from "../controllers/usuario.controller.js";

const router = Router();

router.get("/usuario", getListUsuarios);
router.post("/usuario");

export default router;