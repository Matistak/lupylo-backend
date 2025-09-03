import mongoose, { Schema, Document } from 'mongoose';

export interface ILike extends Document {
  usuario_id: number;
  publicacion_id?: mongoose.Types.ObjectId;
  comentario_id?: mongoose.Types.ObjectId;
  creado_en: Date;
}

const LikeSchema: Schema = new Schema({
  usuario_id: { type: Number, required: true },
  publicacion_id: { type: Schema.Types.ObjectId, ref: 'Publicacion' },
  comentario_id: { type: Schema.Types.ObjectId, ref: 'Comentario' },
  creado_en: { type: Date, default: Date.now }
});

export default mongoose.model<ILike>('Like', LikeSchema);