const fetch = require("node-fetch")

describe("Video service", () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    process.env = { ...OLD_ENV }
    process.env.REACT_APP_BASE_URL = "http://localhost:8888/api/v1/"
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  it("ping endpoint", async (done) => {
    const response = await fetch(process.env.REACT_APP_BASE_URL + "?")

    expect(response.status).toBe(200)
    done()
  })

  it("ping endpoint", async (done) => {
    const response = await fetch(process.env.REACT_APP_BASE_URL + "?")

    expect(await response.json()).not.toBeNull()
    done()
  })
})
