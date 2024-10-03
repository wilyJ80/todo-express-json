export const notes = [
	{
		id: 0,
		text: "Hello World!",
		added: new Date()
	},
	{
		id: 1,
		text: "Second message",
		added: new Date()
	}
];

export const links = {
	index: '/',
	new: '/new',
	details: '/details'
};

/**
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
