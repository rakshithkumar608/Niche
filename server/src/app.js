import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import scriptRoutes from "./routes/script.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000", 
        credentials: true,
    })
);
app.use(express.json());

app.use('/api/scripts', scriptRoutes);
app.use("/api/auth", authRoutes);

export default app;

app.use(errorHandler);