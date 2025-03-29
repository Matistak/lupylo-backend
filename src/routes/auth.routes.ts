import { Router } from "express";
import { registerUserController } from "../controllers/usuario.controller.js";

const authRouter = Router();

authRouter.get("/usuario", registerUserController);
authRouter.post("/usuario");

export default authRouter;