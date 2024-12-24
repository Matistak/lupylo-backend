import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'default_db_name',
    process.env.DB_USER || 'default_db_user',
    process.env.DB_PASSWORD || 'default_db_password',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        dialect: 'postgres',
        logging: false, // Desactiva el logging de Sequelize
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default sequelize;