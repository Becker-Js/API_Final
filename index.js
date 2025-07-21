//
// Estructura del servidor

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.routes.js";
// import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Necesario para leer JSON del body

// Rutas
app.use("/api/products", productRoutes);
// app.use("/auth", authRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada (404)" });
});

// Manejo de errores internos (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor (500)" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
