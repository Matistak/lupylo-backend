import mongoose, { Schema, Document } from 'mongoose';

export interface INotificacion extends Document {
  usuario_id: string;
  tipo: 'comentario' | 'like' | 'nuevo_seguidor' | 'recompensa';
  referencia_id: string;
  mensaje: string;
  leido: boolean;
  createdAt: Date;
}

const NotificacionSchema: Schema = new Schema({
  usuario_id: { type: String, required: true },
  tipo: { 
    type: String, 
    enum: ['comentario', 'like', 'nuevo_seguidor', 'recompensa'],
    required: true 
  },
  referencia_id: { type: String, required: true },
  mensaje: { type: String, required: true },
  leido: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<INotificacion>('Notificacion', NotificacionSchema);