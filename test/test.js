
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server');

describe('server', () => {
  var time = new Date();
  time = time.toTimeString();

  it('should accept GET request to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql(time);
      done();
    });
  });

  it('should accept GET request to /greet', (done) => {
    request('localhost:3000')
    .get('/greet/mark')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('Hello mark');
      done();
    });
  });

  it('should accept POST requests to /greet', (done) => {
    request('localhost:3000')
    .post('/greet')
    .send({ 'name': 'Harry Potter' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello Harry Potter');
      done();
    });
  });

  it('should 404 on a not so good request', (done) => {
    request('localhost:3000')
    .get('/nothing')
    .end((err, res) => {
      expect(err).to.eql(err);
      expect(res).to.have.status(404);
      expect(res.text).to.eql('404 error');
      done();
    });
  });
});
