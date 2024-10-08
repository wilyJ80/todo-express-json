import { describe, it } from "node:test";
import supertest from "supertest";
import { app } from "./app.js";

describe('GET /', () => {
	it('Returns index page', async () => {
		const response = await supertest(app)
			.get('/')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
	});
});

describe('GET /new', () => {
	it('Returns new message page', async () => {
		const response = await supertest(app)
			.get('/new')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
	});
});

describe('POST /new', () => {
	it('Posts a new note', async () => {
		const response = await supertest(app)
			.post('/new');
	});
});

describe('GET /details/:id', () => {
	it('Retrieves note details', async () => {
		const response = await supertest(app)
			.get('/details/0')
			.expect(200);
	});
});
