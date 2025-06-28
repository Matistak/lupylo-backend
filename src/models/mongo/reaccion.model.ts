import mongoose, { Schema, Document } from 'mongoose';

export interface IReaccion extends Document {
  usuario_id: string;
  publicacion_id: mongoose.Types.ObjectId;
  tipo: 'like' | 'dislike' | 'cerveza_favorita';
  createdAt: Date;
}

const ReaccionSchema: Schema = new Schema({
  usuario_id: { type: String, required: true },
  publicacion_id: { type: Schema.Types.ObjectId, ref: 'Publicacion', required: true },
  tipo: { 
    type: String, 
    enum: ['like', 'dislike', 'cerveza_favorita'],
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IReaccion>('Reaccion', ReaccionSchema);