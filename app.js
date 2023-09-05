// Import essential libraries 
require('dotenv').config()
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/src/index.html')); 
	//__dirname : It will resolve to your project folder. 
}); 
//add the router 
app.use("/dist", express.static(__dirname + '/dist'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use('/', router); 
const port = process.env.port || 3000;
app.listen(port); 
console.log('Running at Port ' + port); 