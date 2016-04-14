#Basic HTTP Server
#Katherine Beame
#Due: April 14, 2016
##Assignment:
Create a Vanilla HTTP server that gives you the time when you ask for it and greets you when you ask it to.

##How to use:
In the terminal write **node server.js**
This will start your server and you should see the text *server live* in your terminal.
Open your browser and go to **localhost:3000/greet/**name** (Note that *name* can be anything string that you want. For example: *localhost:3000/greet/Kat*) to be greeted.
Open your browser and go to **localhost:3000/time** to find out the time.

##How to test
Type **mocha** into the terminal for unit tests.
Type **gulp lint** into the terminal for linting checks.

##Help From Sources:
Class Notes
https://github.com/codefellows/seattle-javascript-401d7
http://stackoverflow.com/questions/4758103/last-segment-of-url
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
https://developer.mozilla.org/en-US/docs/Web/API/Request/url
http://www.cambiaresearch.com/articles/53/how-do-i-get-paths-and-url-fragments-from-the-httprequest-object
