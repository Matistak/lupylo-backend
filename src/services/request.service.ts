import { solicitudesAttributes } from "@/models/postgres/solicitudes";
import requestRepository from "../repositories/request.repository.js";

const createRequestService = async (request: solicitudesAttributes) => {
    return await requestRepository.createRequest(request);
};

export default {
    createRequestService
};