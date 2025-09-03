import { Router } from "express";
import { authenticateController, loginUserController, registerUserController, tokenUserController} from "../controllers/usuario.controller.js";

const authRouter = Router();

authRouter.post("/registerUser", registerUserController);
authRouter.post("/login", loginUserController);
authRouter.get("/protected", authenticateController);
authRouter.post("/newAccessToken", tokenUserController);

export default authRouter;