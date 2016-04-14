const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../lib/http_server.js');

describe('Basic HTTP server tests', () => {
  it('should return time when sending GET request to /time', (done) => {
    request('localhost:7000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.contain('the current time is: ');
      done();
    });
  });
  it('should return a greeting when sending GET request to /greet/[name]', (done) => {
    request('localhost:7000')
    .get('/greet/testMePlease')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello testMePlease! Glad you are here!');
      done();
    });
  });
  it('should return a greeting when sending POST request to /greet/', (done) => {
    request('localhost:7000')
    .post('/greet/')
    .send({ 'name': 'postTest' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hellow postTest! Glad you are here!');
      done();
    });
  });

  it('should return a 404 error to any other request');

  // after(() => {
  //   server.close();
  // });
});
