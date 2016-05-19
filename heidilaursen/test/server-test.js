const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server.js');

describe('The HTTP server', () => {
  it('should accept GET requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      var ct = new Date();
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql(ct.toString() + '\n');
      done();
    });
  });
  it('should accept GET requests to /greet/_name_', (done) => {
    var name = 'Kath';
    request('localhost:4000')
    .get('/greet/' + name)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('hello ' + name + '\n');
      expect(res.text).to.contain('A pleasure to meet you, ');
      done();
    });
  });
  it('Should accept JSON from POST request to /greet', (done) => {
    request('localhost:4000')
    .post('/greet')
    .send('{ "name": "Kath" }')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('{"name": "Kath"}');
      done();
    });
  });
  it('Can parse name from JSON POST request to /greet', (done) => {
    request('localhost:4000')
    .post('/greet')
    .send('{ "name": "Kath" }')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      var parsed = JSON.parse(res.text);
      expect(parsed.name).to.eql('Kath');
      done();
    });
  });
});
