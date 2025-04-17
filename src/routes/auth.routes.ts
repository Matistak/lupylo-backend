import { Router } from "express";
import { authenticateController, loginUserController, registerUserController, tokenUserController} from "../controllers/usuario.controller.js";

const router = Router();

router.post("/registerUser", registerUserController);
router.post("/login", loginUserController);
router.get("/protected", authenticateController);
router.post("/newAccessToken", tokenUserController);

export default router;