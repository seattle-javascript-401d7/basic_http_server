const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server');

describe('Server Tests!', () => {
  it('should accept GET requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      done();
    });
  });

  it('should respond with a nice greeting', (done) => {
    request('localhost:3000')
    .get('/greet/maverick')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('hello maverick');
      done();
    });
  });

  it('should post the name', (done) => {
    request('localhost:3000')
    .post('/greet')
    .send({ 'name': 'goose' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('goose');
      done();
    });
  });
});
