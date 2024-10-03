import { describe, it } from "node:test";
import assert from "node:assert";
import supertest from "supertest";
import { app } from "./app.js";

describe('GET /', () => {
	it('Responds with 200 OK', async () => {
		const response = await supertest(app)
			.get('/')
			.expect(200);
	});
});

describe('GET /new', () => {
	it('Responds with 200 OK', async () => {
		const response = await supertest(app)
			.get('/new')
			.expect(200);
	});
});
