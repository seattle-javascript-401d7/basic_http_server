const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// const expect = chai.expect;
// const request = chai.request;
// require(__dirname + '/../server');
//
// describe('the HTTP server response', () => {
//   it('should accept GET requests to /someroute', (done) => {
//     request('localhost:3000')
//       .get('/someroute')
//       .end((err, res) => {
//         expect(err).to.eql(null);
//         expect(res.status).to.eql(200);
//         // expect(res).to.have.status(200);
//         expect(res.text).to.eql('wow such GET');
//         done();
//       });
//   });
//
//   it('should 404 on bad requests', (done) => {
//     request('localhost:3000')
//       .get('/badroute')
//       .end((err, res) => {
//         expect(res.status).to.eql(404);
//         expect(res.text).to.eql('this is a 404 message, yo');
//         done();
//       });
//   });
//   it('should accept POST request to /someroute', (done) => {
//     request('localhost:3000')
//       .post('/someroute')
//       .send({'never': 'gonna give you up'})
//       .end((err, res) => {
//         expect(err).to.eql(null);
//         expect(res).to.have.status(200);
//         expect(res.text).to.eql('gonna give you up');
//         done();
//       });
//   });
// });
