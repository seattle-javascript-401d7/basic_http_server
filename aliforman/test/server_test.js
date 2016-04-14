const chai = require('chai');
require(__dirname + '/../server.js');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const request = chai.request;


describe('to test basic http server written in vanilla node', () => {
  it('should get date and time when routed to current date time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('<h3>The current earth date and time is: ' + new Date() + '.</h3>');
      done();
    });
  });
  it('should greet user and return "Greetings earthling." when routed to /', (done) => {
    request('localhost:3000')
    .get('/')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('<h1>Greetings earthling.</h1>');
      done();
    });
  });

  it('should read "A humanoid... Nice to meet you (name)." when routed to /greet/name', (done) => {
    request('localhost:3000')
    .post('/greet')
    .send({ 'msg': 'A humanoid... Nice to meet you Ali' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('A humanoid... Nice to meet you Ali');
      done();
    });
  });
});
