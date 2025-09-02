import mongoose, { Schema, Document } from 'mongoose';

export interface IPublicacion extends Document {
  autor_id: number;
  tipo_publicacion_id: number;
  titulo?: string;
  contenido: string;
  imagen?: string;
  local_id?: number;
  marca_id?: number;
  producto_id?: number;
  puntuacion?: number;
  color_cerveza?: string;
  aroma?: string;
  sensaciones?: string;
  maridaje_probado?: string;
  fecha_evento?: Date;
  ubicacion_evento?: string;
  estado: string;
  creado_en: Date;
  actualizado_en: Date;
}

const PublicacionSchema: Schema = new Schema({
  autor_id: { type: Number, required: true },
  tipo_publicacion_id: { type: Number, required: true },
  titulo: { type: String },
  contenido: { type: String, required: true },
  imagen: { type: String },
  local_id: { type: Number },
  marca_id: { type: Number },
  producto_id: { type: Number },
  puntuacion: { type: Number },
  color_cerveza: { type: String },
  aroma: { type: String },
  sensaciones: { type: String },
  maridaje_probado: { type: String },
  fecha_evento: { type: Date },
  ubicacion_evento: { type: String },
  estado: { type: String, default: 'activa' },
  creado_en: { type: Date, default: Date.now },
  actualizado_en: { type: Date, default: Date.now }
});

export default mongoose.model<IPublicacion>('Publicacion', PublicacionSchema);