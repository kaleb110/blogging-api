import express from "express";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import { PORT } from "./config/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/posts", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
