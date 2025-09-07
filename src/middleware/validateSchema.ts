import { Request, Response, NextFunction } from 'express';
import { ZodObject, ZodError } from 'zod';

import { StatusCodes } from 'http-status-codes';

export const validate = (schema: ZodObject<any, any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
      const errorMessages = error.issues.map((issue: any) => ({
            message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        res.status(StatusCodes.BAD_REQUEST).json({ error: 'Error al validar los datos', details: errorMessages });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error con el zod' });
      }
    }
  };
