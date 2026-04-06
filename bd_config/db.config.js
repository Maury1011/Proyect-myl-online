import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'postgres',
    PASSWORD: process.env.DB_PASSWORD || 'password',
    DB: process.env.DB_NAME || 'mydatabase',
    DIALECT: process.env.DB_DIALECT || 'postgres',
    PORT: process.env.DB_PORT || 5432
    };
















