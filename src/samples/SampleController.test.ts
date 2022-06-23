

import { Response } from "express"
import {
	createExpressRequestMock,
	createExpressResponseMock,
} from "../common/tests"
import { SampleController } from "./SampleController"
import { MockResponse } from "node-mocks-http"
import application from "../bin/www-test"
import knex from "../database/connection"
import mockDB from "mock-knex"
import { SampleRepository } from "../repositories/SampleRepository"
import { SampleModel } from "../database/model/SampleModel"
import { samplesMock } from "./mock-data"
import { SampleViewModel } from "../view-model/SampleViewModel"

describe("SampleController", () => {
	let controller: SampleController
	let tracker: mockDB.Tracker
	let response: MockResponse<Response<any, Record<string, any>>>
	const app = {
		get: jest.fn(),
		post: jest.fn(),
		put: jest.fn(),
		delete: jest.fn(),
	}
	beforeAll(() => mockDB.mock(knex))
	afterAll(() => mockDB.unmock(knex))
	beforeEach(() => {
		tracker = mockDB.getTracker()
		tracker.install()
		response = createExpressResponseMock()
		controller = new SampleController(application, new SampleRepository(knex))
	})
	afterEach(() => tracker.uninstall())

	it("should register routes", () => {
		controller = new SampleController(app as any, new SampleRepository(knex))
		controller.registerRoutes()
		expect(app.get).toBeCalledTimes(1)
		expect(app.post).toBeCalledTimes(1)
	})

	it("should return 200 on getAll Samples ", (done) => {
		tracker.on("query", (query) => {
			query.response([samplesMock])
		})
		const request = createExpressRequestMock()
		controller
			.getAll(request, response)
			.then(() => {
				expect(response._getStatusCode()).toBe(200)
				done()
			})
			.catch((err) => done(err))
	})

	it("should return error on to try getAll Samples", (done) => {
		const request = createExpressRequestMock()
		controller = new SampleController(application, {
			getAll() {
				return Promise.reject()
			},
		} as SampleRepository)
		controller
			.getAll(request, response)
			.then(() => {
				expect(response._getStatusCode()).toBe(500)
				done()
			})
			.catch((err) => done(err))
	})

	it("should create a new Sample", (done) => {
		const payload = {
			id: 99,
			codigo_amostra: "2223",
      Cocaína: 4,
      Benzoilecgonina: 7
		} as SampleViewModel
		tracker.on("query", (query) => {
			query.response([payload])
		})
		const request = createExpressRequestMock({
			body: payload,
		})
		controller
			.save(request, response)
			.then(() => {
				expect(response._getStatusCode()).toBe(200)
				done()
			})
			.catch((err) => done(err))
	})

	it("should return error on to try create a new Sample", (done) => {
		const request = createExpressRequestMock()
		controller = new SampleController(application, {
			create(data: SampleModel) {
				return Promise.reject(data)
			},
		} as SampleRepository)
		controller
			.save(request, response)
			.then(() => {
				expect(response._getStatusCode()).toBe(500)
				done()
			})
			.catch((err) => done(err))
	})
})
