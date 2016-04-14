const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
require(__dirname + '/../server.js');

describe('The HTTP Server', () => {
  var name = process.argv[2] = 'Kat';
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
    request('localhost:3000')
    .get('/greet/name')
    .end((err, response) => {
      expect(err).to.eql(null);
      expect(response.status).to.eql(200);
      expect(response.text).to.eql('Hello ' + name);
      console.log(name);
      done();
    });
  });
  // it('should accept POST requests to /greet', (done) => {
  //   request('localhost:3000')
  //   .post('/greet')
  //   .send({'name': 'kat'})
  //   .end((err, res) => {
  //     expect(err).to.eql(null);
  //     expect(res.status).to.eql(200);
  //     expect(res.text).to.eql('kat');
  //     done();
  //   });
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
