import app from "./app.js";
import sequelize from "./config/database";
import initModels from "./models/init-models";

async function main() {
    try {
        // Autenticar la conexión a la base de datos
        await sequelize.authenticate();
        console.log("Conexión con éxito");

        // Inicializar modelos y relaciones
        const models = initModels(sequelize);
        console.log("Modelos inicializados");

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