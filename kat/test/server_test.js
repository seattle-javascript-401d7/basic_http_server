const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const chaiHttp = require('chai-http');
require(__dirname + '/../server.js');
chai.use(chaiHttp);

describe('The HTTP Server', () => {
it('should accept a GET request to /time', (done) => {
  request('localhost:3000')
  .get('/time')
  .end((err, response) => {
    expect(err).to.eql(null);
    expect(response.status).to.eql(200);
    expect(response.text).to.eql(Date().toString());
    done();
    });
  });
  it('should accept a GET request to /greet/name', (done) => {
    var name = process.argv[2] = 'Kat';
    request('localhost:3000')
    .get('/time')
    .end((err, response) => {
      expect(err).to.eql(null);
      expect(response.status).to.eql(200);
      expect(response.text).to.eql(name);
      done();
    });
  });
it('should be 418 on a bad request', (done) => {
  request('localhost:3000')
  .get('/crackpot')
  .end((err, response) => {
    expect(response.status).to.eql(418);
    expect(response.text).to.eql('418: I\'m a little teapot!');
    done();
    });
  });
});
