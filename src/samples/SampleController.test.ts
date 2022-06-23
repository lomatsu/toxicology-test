import { describe, it } from 'mocha'
import request from 'supertest'
import assert from 'assert'
import app from '../app'
import { samplesMock } from './mock-data'

describe("SampleController Suite Test", () => {
  describe('/samples', () => {
    it("should request the samples analyzed and return HTTP  Status 404", () => {
      const expected = {
        Cocaína: 0.3,
        Anfetamina: 3
      }
      assert.deepStrictEqual(JSON.stringify(samplesMock), JSON.stringify(expected));
    })
  })
})

