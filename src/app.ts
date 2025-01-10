import express from 'express';
import usuarioRouter from './routes/usuario.routes.js';

const app = express()

app.use(express.json());

app.use(usuarioRouter);

export default app;