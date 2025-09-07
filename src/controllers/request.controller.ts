import requestService from "../services/request.service";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const createRequestController = async (req: Request, res: Response) => {
    try {
        const request = await requestService.createRequestService(req.body);
        res.status(StatusCodes.CREATED).json({
            message: 'Request created successfully',
            request
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error creating request' });
    }
};

export {
    createRequestController
};

/*
 - Tengo que verificar si el usuario que esta solicitando su creacion en el backoffice no fue creado previamente en la base de datos
 - Tengo que verificar al momento de aceptar la solicitud que el usuario no exista en la base de datos
 - Solamente si se acepta el usuario (marco o local) desde el backoffice, lleva el simbolo de verificado
 - Mandar un mail de verificacion al usuario
*/
