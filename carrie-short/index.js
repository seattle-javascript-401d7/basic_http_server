require(__dirname + '/lib/server');
const request = require('superagent');
const name = process.argv[2] || 'Oh No Mr Bill';
request
  .post('http://localhost:3000/greet')
  .send({ 'name': name })
  .end((err, res) => {
    if (err || !res.ok) {
      console.log('There was an error');
    } else {
      console.log(res.text);
    }
  });
