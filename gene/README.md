#Basic HTTP Server

##Description

This project is an http server in vanilla node that responds to several different routes, including a /time route that will send back the current time of the server.

It also responds to a get request to /greet/name where name is any single word string. It sends back a string that greets that name.

It also has a separate post request to /greet that takes the name in JSON format.

It includes chaiHTTP tests for both routes, as well as a gulpfile and a package.json

##To run:
  * Clone to your own repo
  * Install superagent-cli
  * Navigate to the root directory
  * Type node server.js
  * Open a browser
  * Navigate to localhost:3000/time to view the current server time
  * Navigate to localhost:3000/greet/<type your name> to have it greet you personally
  * On the command line, type superagent localhost:3000/greet put {'("name": "Salmons")'}
