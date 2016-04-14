#Basic HTTP Server

##Description

The server responds to a request to /time with the current time.

The server responds to /greet/<name> with a string that says "Hello <name>".

The server also accepts a POST to /greet in Json format and will return "Hello <name>" if the name is a property on the JSON.

There are tests for each GET/POST and 404 using chaiHTTP.
