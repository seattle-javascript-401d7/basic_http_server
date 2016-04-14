const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
require(__dirname + '/../server');

describe('the HTTP server response', () => {
  it('should accept GET requests to /greet/newUser', (done) => {
    request('localhost:3000')
      .get('/greet/newUser')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        // expect(res).to.have.status(200);
        expect(res.text).to.eql('Greetings newUser');
        done();
      });
  });

  it('should 404 on bad requests', (done) => {
    request('localhost:3000')
      .get('/badroute')
      .end((err, res) => {
        expect(res.status).to.eql(404);
        expect(res.text).to.eql('this is a 404 message, yo');
        done();
      });
  });

  it('should accept POST request to /greet/newUser takes it as JSON', (done) => {
    request('localhost:3000')
      .post('/greet/newUser')
      .send({ 'greeting': 'Greetings ' })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Greetings newUser');
        done();
      });
  });
});
