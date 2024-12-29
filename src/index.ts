import app from "./app.js";
import sequelize from "./config/database.js";
import initModels from "./models/init-models.js";

async function main() {
    try {
        // Autenticar la conexión a la base de datos
        await sequelize.authenticate();
        console.log("Conexión con éxito");

        // Sincronizar modelos (opcional, si deseas asegurar que la estructura de tablas está actualizada)
        await sequelize.sync({ force: false });

        // Iniciar el servidor
        app.listen(4000);
        console.log("Servidor escuchando en el puerto 4000");
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

main();