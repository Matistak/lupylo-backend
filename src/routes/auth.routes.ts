import { Router } from "express";
import { authenticateController, loginUserController, logoutUserController, registerUserController, tokenUserController} from "../controllers/usuario.controller.js";

const router = Router();

router.post("/registerUser", registerUserController);
router.post("/login", loginUserController);
router.get("/protected", authenticateController); // Ruta protegida que requiere autenticación ejemplo
router.post("/newAccessToken", tokenUserController);
router.post("/logout", logoutUserController)


export default router;