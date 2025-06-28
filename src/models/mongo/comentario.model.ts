import mongoose, { Schema, Document } from 'mongoose';

export interface IComentario extends Document {
  publicacion_id: mongoose.Types.ObjectId;
  usuario_id: string;
  contenido: string;
  createdAt: Date;
}

const ComentarioSchema: Schema = new Schema({
  publicacion_id: { type: Schema.Types.ObjectId, ref: 'Publicacion', required: true },
  usuario_id: { type: String, required: true },
  contenido: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IComentario>('Comentario', ComentarioSchema);