import { Publicacion } from "@/models/mongo/index.js";
import { IPublicacion } from "@/models/mongo/publicacion.model.js";


class PublicacionRepository {
  async crear(publicacionData: Partial<IPublicacion>): Promise<IPublicacion> {
    const nuevaPublicacion = new Publicacion(publicacionData);
    return await nuevaPublicacion.save();
  }

  async obtenerPorId(id: string): Promise<IPublicacion | null> {
    return await Publicacion.findById(id);
  }

  async obtenerPorUsuarioId(usuarioId: string): Promise<IPublicacion[]> {
    return await Publicacion.find({ usuario_id: usuarioId });
  }

  async actualizar(id: string, publicacionData: Partial<IPublicacion>): Promise<IPublicacion | null> {
    return await Publicacion.findByIdAndUpdate(id, publicacionData, { new: true });
  }

  async eliminar(id: string): Promise<boolean> {
    const resultado = await Publicacion.findByIdAndDelete(id);
    return resultado !== null;
  }
}

export default new PublicacionRepository();