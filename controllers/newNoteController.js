import { notes, links } from "./indexController.js";
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export function addNotePage(req, res) {
	res.render("new.html", {
		links: links
	});
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export function addNote(req, res) {
	const added = req.body.text;
	notes.push({ text: added, added: new Date() })
	res.redirect(links.index);
}
