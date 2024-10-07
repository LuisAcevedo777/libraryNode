const request = require("supertest");
const app = require("../src/lib/app");

describe("Loans API", () => {
  const userId = 1;
  const bookId = 7;

  describe("POST /api/loans/:userId/:bookId", () => {
    it("should respond with a 201 status code and return the created loan object", async () => {
      const newLoan = {
        "userId": userId,
        "bookId": bookId,
        "loanDate": "01/11/2023",
        "returnDate": "01/12/2023"
      };
      const response = await request(app)
        .post(`/api/loans/${1}/${2}`)
        .send(newLoan);

      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("userId");
      expect(response.body).toHaveProperty("bookId");
      expect(response.body).toHaveProperty("loanDate");
      expect(response.body).toHaveProperty("returnDate");
    });
  });

  describe("PUT /api/loans/:loanId", () => {
    it("should respond with a 204 status code", async() => {
      const newLoan = {
        "loanDate": "01/11/2023",
 "returnDate": "01/12/2023"
}
      const response = await request(app)
      
        .put(`/api/loans/1`)
        .send(newLoan);

      expect(response.statusCode).toBe(204);
     
    });
  });
});
