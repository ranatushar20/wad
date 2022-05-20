// server.js File
const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = 8000; // Setting an port for this application


// Starting server using listen function
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
app.get('/post', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
app.get('/put', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
app.get('/delete', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });