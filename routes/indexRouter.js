import Router from "express";
import { getMessages } from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get('/', getMessages);
