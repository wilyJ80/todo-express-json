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
	new: '/new'
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
