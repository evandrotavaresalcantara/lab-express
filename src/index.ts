import dotenv from "dotenv";
// import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { v4 as uuid } from "uuid";

dotenv.config({ path: path.resolve(process.cwd(), ".env.dev") });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const uid = uuid();
  const resposta = {
    idPacoteUUID: uid,
    nomeEnv: process.env.NOME || "vazio",
    env: process.env,
  };
  res.status(200).json(resposta);
});

app.listen(5000, () => {
  console.log(`🔥 Server is running on port 5000`);
});
