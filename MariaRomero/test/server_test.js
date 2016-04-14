var server = require(__dirname + '/../lib/server');

const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const request = chai.request;

describe('the server', () => {

  it('should accept GET requests to /myServer', (done) => {
    request('localhost:3000')
    .get('/myServer')
    .end( (error, res) => {
      expect(error).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('<h2>Welcome to myServer!</h2>');
      done();
    });
  });
  it('should accept GET requests to /myServer/time and return current time', (done) => {
    request('localhost:3000')
    .get('/myServer/time')
    .end( (error, res) => {
      expect(error).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('<h3>The server time is: ' + Date() + '</h3>');
      done();
    });
  });
  it('should accept GET requests to /myServer/greet/anyNameString', (done) => {
    request('localhost:3000')
    .get('/myServer/greet/Stranger')
    .end( (error, res) => {
      expect(error).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('<h2>Hello Stranger!</h2>');
      done();
    });
  });
  it('should accept POST requests to /myServer/greet', (done) => {
    request('localhost:3000')
    .post('/myServer/greet')
    .send({ 'name': 'Maria' })
    .end( (error, res) => {
      expect(error).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('<h2>Hello Maria!</h2>');
      done();
    });
  });
  it('should return 404 error on bad requests', (done) => {
    request('localhost:3000')
    .get('/notARoute')
    .end( (error, res) => {
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('404 Error, not found');
      done();
    });
  });
  after(() => {
    server.close();
  });
});
