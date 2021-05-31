import dotenv from "dotenv";
dotenv.config();

const config = {
    modo: process.env.NODE_ENV,
    contraseniaMongo: process.env.MONGO_PASSWORD,
    nombreBaseDatos: process.env.DB_NAME
};

export default config;