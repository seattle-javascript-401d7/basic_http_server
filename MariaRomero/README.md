#Basic HTTP Server

##Description

CF Javascript 401 assignment 4/14/16
This application creates an http server in vanilla node that responds to several different routes.

It responds to a request to /time and sends back the current time of the server.
It also responds to a get request to /greet/name where name is any single word string, and sends back a string that greets that name.
It has a separate post request to /greet that takes the name in JSON format.

Tests are implemented for all routes using chaiHTTP.
