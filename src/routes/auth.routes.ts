import { Router } from "express";
import { authenticateController, loginUserController, registerUserController, tokenUserController} from "@/controllers/usuario.controller.js";
import { registerUserRequest } from "@/schemas/auth.schema.js";
import { validate } from "@/middleware/validateSchema.js";

const authRouter = Router();

authRouter.post("/registerUser",validate(registerUserRequest), registerUserController);
authRouter.post("/login", loginUserController);
authRouter.get("/protected", authenticateController);
authRouter.post("/newAccessToken", tokenUserController);

export default authRouter;