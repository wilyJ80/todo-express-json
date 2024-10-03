import { Router } from "express";
import { addNotePage, addNote } from "../controllers/newNoteController.js";

export const newNoteRouter = Router();

newNoteRouter.get('/', addNotePage);
newNoteRouter.post('/', addNote);
