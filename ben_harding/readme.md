## SLOTHBEAR BASIC HTTP server
* A basic http server for slothbears

#### Functionality
* The server can be launched either using ``` node server.js ``` or ``` node index.js ```.
* The server accepts request through the url ``` /time ``` and returns the current server time.
* It also accepts GET requests through the url ``` /greet/__name__ ``` and returns a greeting to ``` __name__ ```.
* It accepts JSON from POST requests to ``` /greet ``` and returns a greeting to whatever value is in the name property of the JSON object.
