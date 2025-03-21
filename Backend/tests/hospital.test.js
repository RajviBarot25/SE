const request = require("supertest");
const app = require("../app");
const Hospital = require("../models/Hospital");
const User = require("../models/User");

describe("Hospital API", () => {
  let token;

  beforeAll(async () => {
    await User.deleteMany({});
    await Hospital.deleteMany({});

    // ✅ Register and login user to get token
    await request(app).post("/api/v1/register").send({
      username: "deepanshu",
      email: "deepanshu@gmail.com",
      password: "deepanshu@gmail.com",
    });

    const loginRes = await request(app).post("/api/v1/login").send({
      email: "deepanshu@gmail.com",
      password: "deepanshu@gmail.com",
    });

    token = loginRes.body.token; // ✅ Store token
    console.log("Generated Token:", token);
  });

  test("Should add a new hospital", async () => {
    const res = await request(app)
      .post("/api/v1/hospitals/add")
      .send({ hosp_name: "Max Hospital", address: "Delhi" })
      .set("Authorization", `Bearer ${token}`); // ✅ Pass token dynamically

    console.log("Hospital Add Response:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("hospital");
    expect(res.body.hospital.hosp_name).toBe("Max Hospital");
  });
});