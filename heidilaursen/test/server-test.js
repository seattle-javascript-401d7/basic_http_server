const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server.js');

describe('the HTTP server', () => {

  it('should accept GET requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      var time = new Date();
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql(time.toTimeString());
      done();
    });
  });
  it('should accept GET requests from /greet', (done) => {
    var name = 'Kath';
    request('localhost:3000')
    .get('/greet/' + name)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello ' + name + '\n');
      done();
    });
  });

  it('Should POST request to /greet/', (done) => {
    var per = { 'name': 'Kath' };
    request('localhost:3000')
    .post('/greet')
    .send(per)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Hello ' + per.name);
      done();
    });
  });
});
