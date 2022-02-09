import { Router } from "express";
import boardRouter from "./board.routes";

const routes = Router();

routes.use("/", boardRouter);

export default routes;
