const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server');

describe('slothbear http server', () => {
  it('should accept requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      var ct = new Date();
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql(ct.toString());
      done();
    });
  });
  it('should accept GET requests to /greet/___something___', (done) => {
    var name = 'slothbear';
    request('localhost:3000')
    .get('/greet/' + name)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('hello ' + name);
      done();
    });
  });
  it('should accept POST requests to /greet');
});
