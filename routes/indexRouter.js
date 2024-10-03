import Router from "express";
import { getNotes, getNoteDetails } from "../controllers/indexController.js";

export const indexRouter = Router();

indexRouter.get('/', getNotes);
indexRouter.get('/details/:id', getNoteDetails);
