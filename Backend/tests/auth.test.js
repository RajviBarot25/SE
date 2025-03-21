const request = require("supertest");
const app = require("../app");
const User = require("../models/User");

describe("Authentication API", () => {
  let token;

  beforeAll(async () => {
    await User.deleteMany({});

    // ✅ Register user
    await request(app).post("/api/v1/register").send({
      username: "deepanshu",
      email: "deepanshu@gmail.com",
      password: "deepanshu@gmail.com",
    });

    // ✅ Log in to get the token
    const loginRes = await request(app).post("/api/v1/login").send({
      email: "deepanshu@gmail.com",
      password: "deepanshu@gmail.com",
    });

    console.log("Login Response:", loginRes.body); // Debugging step

    token = loginRes.body.token; // ✅ Store token
  });

  test("User should login and return token", async () => {
    expect(token).toBeDefined(); // ✅ Ensure token is received
  });
});