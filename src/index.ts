import app from "./app.js";
import sequelize from "./config/postgresdb.js";
import { initModels } from "./models/postgres/init-models.js";
// import connectMongoDB from "./config/mongodb.js";

export const ACCESS_TOKEN_SECRET = '01TzMX6RVg6ADwIa0mELcdP3mRzkiWPQVyIDAcQd6dYXZvIyuLVBoJbBdCmd2Q1E';
export const REFRESH_TOKEN_SECRET = 'LVuxkTilCYY5v5PY1u3PzvIFJ6F1XtYeZCJuzKV6oFiU64pQWwaa0JvYZT7z6P10';
export const ACCESS_TOKEN_EXPIRATION = '1m';

async function main() {
    try {
        // Autenticar la conexión a la base de datos PostgreSQL
        await sequelize.authenticate();
        console.log("PostgreSQL connection successful");

        // Inicializar los modelos
        initModels(sequelize);
        console.log("Models initialized successfully");

        // Conectar a MongoDB
       //await connectMongoDB();

        // Sincronizar modelos (opcional, si deseas asegurar que la estructura de tablas está actualizada)
        await sequelize.sync({ force: false });

        // Iniciar el servidor
        app.listen(3000);
        console.log("Server listening on port 3000");
    } catch (error) {
        console.error("Error starting the application:", error);
    }
}

main();