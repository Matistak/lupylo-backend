import { Request, Response } from 'express';
import models from '../models/init-models.js';

const { usuario } = models;

export const getListUsuarios = async (req: Request, res: Response): Promise<void>  => {
    res.send("getListUsuarios");
}