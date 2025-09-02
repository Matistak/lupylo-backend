import mongoose, { Schema, Document } from 'mongoose';

export interface IComentario extends Document {
  publicacion_id: mongoose.Types.ObjectId;
  autor_id: number;
  contenido: string;
  comentario_padre_id?: mongoose.Types.ObjectId;
  estado: string;
  creado_en: Date;
  actualizado_en: Date;
}

const ComentarioSchema: Schema = new Schema({
  publicacion_id: { type: Schema.Types.ObjectId, ref: 'Publicacion', required: true },
  autor_id: { type: Number, required: true },
  contenido: { type: String, required: true },
  comentario_padre_id: { type: Schema.Types.ObjectId, ref: 'Comentario' },
  estado: { type: String, default: 'activo' },
  creado_en: { type: Date, default: Date.now },
  actualizado_en: { type: Date, default: Date.now }
});

export default mongoose.model<IComentario>('Comentario', ComentarioSchema);