import { Router } from "express";
import { loginUser, registerUserController } from "../controllers/usuario.controller.js";

const router = Router();

router.post("/registerUser", registerUserController);
router.post("/login", loginUser)

export default router;