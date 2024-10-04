import fs from "node:fs/promises";
import path from "node:path";

export async function loadNotes() {
	const filePath = path.resolve(import.meta.dirname, '../db/initial-schema.json');
	try {
		const data = await fs.readFile(filePath);
		return JSON.parse(data);
	} catch (error) {
		console.error(`Error loading initial schema: ${error}`);
	}
}

export const notes = await loadNotes();

/**
 * Routes for the app.
 */
export const links = {
	index: '/',
	new: '/new',
	details: '/details'
};

/**
 * Render page of note list.
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export function getNotes(req, res) {
	res.render("index.html", {
		notes: notes,
		links: links
	});
}

/**
 * Render note detail page.
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export function getNoteDetails(req, res) {
	const noteId = parseInt(req.params.id, 10);
	const note = notes.find(note => note.id === noteId);

	if (note) {
		res.render('details.html', { note });
	} else {
		res.status(404).send('Note not found');
	}
}
