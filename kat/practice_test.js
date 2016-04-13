const chai = require('chai');
const expect = chai.expect;
const request = chai.request;
const chaiHttp = require('chai-http');
require(__dirname + '/practice_server.js');
chai.use(chaiHttp);


describe ('The HTTP Server', () => {

  it('should accept GET request to /someroute', (done) => {
    request('localhost:3000')
    .get('/someroute')
    .end((err, response) => {
      expect(err).to.eql(null);
      expect(response.status).to.eql(200);
      expect(response).to.have.status(200);
      expect(response.text).to.eql('WOW GET');
      expect(response.type).to.eql(JSON);
      done();
    });
  });
  it('should 404 on bad request', (done) => {
    request('localhost:3000')
    .get('/badroute')
    .end((err, res) => {
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('this is a 404 message');
      }
    });
  });
});
