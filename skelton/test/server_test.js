const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const sTime = require(__dirname + "/../lib/server.js");

describe("The HTTP server", () => {
  it("should accept GET requests to /time", (done) => {
    request("localhost:3030")
    .get("/time")
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.not.eql(undefined || {});
      done();
    });
  });
  it("Should accept JSON from POST request to /greet", (done) => {
    request("localhost:3030")
    .post("/greet")
    .send({"name": "Flynn"})
    .end((err, res) => {
      expect(res).to.be.json;
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('{"name": "Flynn"}');
      done();
    });
  });
  it("Can parse name from JSON POST request to /greet", (done) => {
    request("localhost:3030")
    .post("/greet")
    .send({"name": "Flynn"})
    .end((err, res) => {
      expect(res).to.be.json;
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      var parsed = JSON.parse(res.text);
      expect(parsed.name).to.eql("Flynn");
      done();
    });
  });
});
