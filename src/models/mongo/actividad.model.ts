import mongoose, { Schema, Document } from 'mongoose';

export interface IActividad extends Document {
  usuario_id: string;
  tipo: 'publicacion' | 'comentario' | 'reaccion' | 'seguimiento' | 'objetivo';
  referencia_id: string;
  texto: string;
  createdAt: Date;
}

const ActividadSchema: Schema = new Schema({
  usuario_id: { type: String, required: true },
  tipo: { 
    type: String, 
    enum: ['publicacion', 'comentario', 'reaccion', 'seguimiento', 'objetivo'],
    required: true 
  },
  referencia_id: { type: String, required: true },
  texto: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IActividad>('Actividad', ActividadSchema);