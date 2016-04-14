const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../lib/server');

describe('the http server', () => {
  it('should accept GET requests to /time and respond with current time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('' + new Date());
      done();
    });
  });
  it('should accept GET requests to /greeting/name and greet name', (done) => {
    request('localhost:3000')
    .get('/greet/name')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello ' + 'name');
      done();
    });
  });
  it('should 404 on bad requests');
  it('should accept post requests from /greeting');
});
