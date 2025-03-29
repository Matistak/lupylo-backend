import app from "./app.js";
import sequelize from "./config/database.js";
import initModels from "./models/init-models.js";

const ACCESS_TOKEN_SECRET = '01TzMX6RVg6ADwIa0mELcdP3mRzkiWPQVyIDAcQd6dYXZvIyuLVBoJbBdCmd2Q1E';
const REFRESH_TOKEN_SECRET = 'LVuxkTilCYY5v5PY1u3PzvIFJ6F1XtYeZCJuzKV6oFiU64pQWwaa0JvYZT7z6P10';
const ACCESS_TOKEN_EXPIRATION = '15m';

async function main() {
    try {
        // Autenticar la conexión a la base de datos
        await sequelize.authenticate();
        console.log("Conexión con éxito");

        // Sincronizar modelos (opcional, si deseas asegurar que la estructura de tablas está actualizada)
        await sequelize.sync({ force: false });

        // Iniciar el servidor
        app.listen(3000);
        console.log("Servidor escuchando en el puerto 3000");
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

main();