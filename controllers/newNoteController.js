/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export function addNewNote(req, res) {
	res.render("new.html");
}
