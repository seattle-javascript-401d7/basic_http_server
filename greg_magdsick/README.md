## Simple HTTP server
This was written for the 401d7 course at CodeFellows by Greg Magdsick

This is a simple http server that responds to get requests to:
/greet/[greetername]
/time

with 'Hello [greetername]! Glad you are here!'
and
the current date and time, respectively.

In additon, it responds to a POST request to:
/greet/
that contains a JSON file with the key/value pair for name.

##To start the server
From the base directrory, type 'node index.js'

##To Test
Type 'gulp test', to test the files for linting errors, as well as run the test suite.
