const chai = require('chai');
const chaiHTTP = require('chai-http');

var expect = chai.expect;
chai.use(chaiHTTP);

const server = require(__dirname + '/../server');

describe('server startup and routing', () => {

  after((done) => {
    server.close(() => {
      done();
    });
  });

  it('should respond to GET at /time with the current time', (done) => {
    var time = new Date();
    var h1Time = '<h1>' + time + '</h1>';
    chai.request('http://localhost:5000')
    .get('/time')
    .end((error, response) => {
      expect(response.text).to.eql(h1Time);
      done();
    });
  });

  it('should respond to GET at /greet/rumothewolpertine with "hello rumothewolpertine"', (done) => {
    var h1name = '<h1>Hello rumothewolpertine</h1>';
    chai.request('http://localhost:5000')
    .get('/greet/rumothewolpertine')
    .end((error, response) => {
      expect(response.text).to.eql(h1name);
      done();
    });
  });

  it('should respond to POST at /greet with JSON data', (done) => {
    var jsonData = { 'name': 'rumothewolpertine' };
    var h1name = '<h1>Hello rumothewolpertine</h1>';
    chai.request('http://localhost:5000')
    .post('/greet')
    .send(jsonData)
    .end((error, response) => {
      expect(response.text).to.eql(h1name);
      done();
    });
  });
});
