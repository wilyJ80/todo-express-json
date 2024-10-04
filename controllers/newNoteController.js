import fs from 'node:fs/promises';
import path from 'node:path';
import { notes, links } from "./indexController.js";

/**
 * Render page for adding a note.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export function addNotePage(req, res) {
	res.render("new.html", {
		links: links
	});
}

/**
 * Compute new note ID, and overwrite JSON db, redirecting to index.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export function addNote(req, res) {
	const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 0;
	notes.push({ id: newId, text: req.body.text, added: new Date() })
	saveContent(notes);
	res.redirect(links.index);
}

/**
 * Compute path data for trying to save JSON data to db.
 * @param {string} content
 */
export async function saveContent(content) {
	const jsonString = JSON.stringify(content);
	const dbPath = path.resolve(import.meta.dirname, '../db/data.json');
	try {
		await fs.writeFile(dbPath, jsonString);
	} catch (error) {
		console.error(`Error writing file: ${error}`);
	}
}
