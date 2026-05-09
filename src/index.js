import express from "express";
import dotenv from "dotenv";
import { db_initialize_create } from "./db.js";
import itemsRouter from './routes/items.js';
import authRouter from './routes/auth.js';

dotenv.config();

console.log("PORT:", process.env.PORT);
//console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app = express();

app.use(express.json());
app.use("/items", itemsRouter);
app.use("/auth", authRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


db_initialize_create().then(() => {
  console.log("DB initialized and tables created");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
