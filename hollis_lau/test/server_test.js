const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + "/../server");

describe("server", () => {
  it("should respond 404 on bad requests", (done) => {
    request("localhost:3000")
    .get("/badroute")
    .end((err, res) => {
      expect(err).to.eql(err);
      expect(res).to.have.status(404);
      expect(res.text).to.eql("Not found, bitches!");
      done();
    });
  });

  it("should respond to / with a general greeting", (done) => {
    request("localhost:3000")
    .get("/")
    .end((err, res) => {
      expect(err).to.eql(err);
      expect(res).to.have.status(200);
      expect(res.text).to.eql("Howdy bitches!");
      done();
    });
  });

  it("should respond to /time with the current server time", (done) => {
    request("localhost:3000")
    .get("/time")
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql(res.header.date);
      done();
    });
  });

  it("should respond to /greet/[name] by greeting [name]", (done) => {
    request("localhost:3000")
    .get("/greet/Bob")
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql("Hello Bob!");
      done();
    });
  });

  it("should accept POST requests to /greet", (done) => {
    request("localhost:3000")
    .post("/greet")
    .send({ "name": "Bob" })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql("Hello Bob!");
      done();
    });
  });
});
