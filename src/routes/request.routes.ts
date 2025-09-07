import { createRequestController } from "@/controllers/request.controller";
import { Router } from "express";


const requestRouter = Router();

requestRouter.post("/createRequest", createRequestController);

export default requestRouter;
