import dotenv from "dotenv";
dotenv.config();

export const jwtSecret = process.env.JWT_SECRET;

export const SERVER_PORT = +process.env.SERVER_PORT || 5001;
