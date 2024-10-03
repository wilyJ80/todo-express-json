import Router from "express";
import { getNotes } from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get('/', getNotes);
