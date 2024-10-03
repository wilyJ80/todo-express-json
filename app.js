import express from "express";
import ejs from "ejs";
import { indexRouter } from "./routes/indexRouter.js";
import { newNoteRouter } from "./routes/newNoteRouter.js";
export const app = express();

app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newNoteRouter);
