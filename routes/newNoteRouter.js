import { Router } from "express";
import { addNewNote } from "../controllers/newNoteController.js";

export const newNoteRouter = Router();

newNoteRouter.get('/', addNewNote);
