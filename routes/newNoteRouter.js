import { Router } from "express";
import { addNewMessage } from "../controllers/newNoteController.js";

export const newNoteRouter = Router();

newNoteRouter.get('/', addNewMessage);
