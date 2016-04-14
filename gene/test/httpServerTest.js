var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;

var server = require(__dirname + '/../server');

describe('HTTP server', () => {
  after(() => {
    server.close();
  });

  it('should 404 on a page that does not exist', (done) => {
    request('localhost:3000')
      .get('/DNE')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.eql('page not found');
        done();
      });
  });

  it('should respond to a GET request /time with server time', (done) => {
    request('localhost:3000')
      .get('/time')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        var date = new Date(res.text);
        expect(isNaN(date.valueOf())).to.eql(false);
        done();
      });
  });

  it('should respond to a GET request to /greet with greeting', (done) => {
    request('localhost:3000')
      .get('/greet/world')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Hello world');
        done();
      });
  });

  it('should respond to a POST request to /greet', (done) => {
    request('localhost:3000')
      .post('/greet')
      .send({ name: 'from the other side' })
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.text).to.eql('Hello from the other side');
        done();
      });
  });
});
