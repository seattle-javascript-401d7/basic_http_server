const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../lib/server');

describe('vanilla http server test', () => {
  it('should accept GET requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql(Date().toString());
        done();
    });
  });

  it('should accept a GET request to /greet/name', (done) => {
    request('localhost:3000')
    .get('/greet/name')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('Hey name');
    done();
  });
});

  it('should accept POST requests', (done) => {
    request('localhost:3000')
    .post('/greeting')
    .send({ 'name': 'Rachel' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      console.log(res.text);
      expect(res.text).to.eql('Rachel');
      done();
    });
  });
});
