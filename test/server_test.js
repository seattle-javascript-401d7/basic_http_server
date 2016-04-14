'use strict';
const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../server');

let time = new Date().toString();

describe('Creating a successful HTTP server', () => {
  it ('should accept GET requests to /time', (done) => {
    request('localhost:3000')
    .get('/time')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('The time is ' + time);
      done();
    });
  });

  it ('should accept GET request at /greet/name', (done) => {
    request('localhost:3000')
    .get('/greet/testname')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Greetings testname');
      done();
    });
  });

  it ('should accept a POST request at /greet', (done) => {
    request('localhost:3000')
    .post('/greet')
    .send({ 'name': 'Phillip' })
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Phillip');
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });
});
