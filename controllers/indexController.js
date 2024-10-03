export const messages = [
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

/**
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */
export function getMessages(req, res) {
	res.render("index.html", {
		messages: messages
	});
}

