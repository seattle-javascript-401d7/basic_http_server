const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../lib/server');

describe('Server is running', () => {
  it('should accept GET requests to /time', (done) => {
    var date = new Date();
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('' + date);
      done();
    });
  });

  it('should accept GET reqeusts to /greet/user', (done) => {
    request('localhost:3000')
    .get('/greet/user')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Greetings user!');
      done();
    });
  });

  it('should 404 on bad requests', (done) => {
    request('localhost:3000')
    .get('/badroute')
    .end((err, res) => {
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('<h1>Error 404</h1>');
      done();
    });
  });

  it('should accept GET requests to /greet/user', (done) => {
    var name = url.slice(7);
    request('localhost:3000')
    .get('/greet/')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Greetings ' + name + '!');
      done();
    });
  });
});
