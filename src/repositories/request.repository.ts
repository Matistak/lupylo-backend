import { solicitudes, solicitudesAttributes } from "@/models/postgres/solicitudes";

const createRequest = async (request: solicitudesAttributes) => {
    return await solicitudes.create(request);
};

export default {
    createRequest
};