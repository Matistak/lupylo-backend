import mongoose, { Schema, Document } from 'mongoose';

export interface IPublicacion extends Document {
  usuario_id: string;
  producto_id: string;
  titulo: string;
  contenido: string;
  puntuacion: number;
  imagenes: string[];
  tipo_publicacion: 'reseña' | 'promocion' | 'evento';
  visibilidad: 'publica' | 'seguidores';
  estado: 'activa' | 'moderada' | 'eliminada';
  createdAt: Date;
}

const PublicacionSchema: Schema = new Schema({
  usuario_id: { type: String, required: true },
  producto_id: { type: String, required: true },
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  puntuacion: { type: Number },
  imagenes: [{ type: String }],
  tipo_publicacion: { 
    type: String, 
    enum: ['reseña', 'promocion', 'evento'],
    required: true 
  },
  visibilidad: { 
    type: String, 
    enum: ['publica', 'seguidores'],
    default: 'publica' 
  },
  estado: { 
    type: String, 
    enum: ['activa', 'moderada', 'eliminada'],
    default: 'activa' 
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPublicacion>('Publicacion', PublicacionSchema);