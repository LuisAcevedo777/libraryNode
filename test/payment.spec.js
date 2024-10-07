const request = require("supertest");
const app = require("../src/lib/app");

describe("POST /api/session", () => {
  it("should respond with a JSON object containing the session ID", async () => {
    const response = await request(app).post("/api/session").send({
      amount: 1000,
      quantity: 2,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(typeof response.body.id).toBe("string");
  });
});
