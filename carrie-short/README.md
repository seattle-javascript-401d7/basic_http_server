# TCP Server

##Description
This server listens for connections and provides a response.

##How to Use:
node index.js argToTestPost
curl or visit localhost:3000/greet/somename
curl or visit localhost:3000/time


##Dev-Dependencies
* "chai"
* "chai-http"
* "gulp"
* "gulp-eslint"
* "gulp-mocha"
* "mocha"
* "superagent"

##Dependencies
* "http"

##How to Test
Run gulp in the Command Line.

Code is linted.
Tests check:
* get request to /greet/name
* get request to /time
* post request to /greet with json data
* bad get request to return 404
