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
      expect(response.text).to.eql('What a good GET');
      expect(response.type).to.eql(JSON);
      done();
    });
  });
});
