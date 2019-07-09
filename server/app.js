const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const serveStatic = require('serve-static');

const API = require('./routes/API');

const db = 'mongodb://localhost:27017/TestDB';

mongoose.connect(db, function (err, db) {
	if (err) {
		console.log("error:", err);
	} else {
		console.log("Connected correctly to database", db.port);
	}
});

const port = process.env.PORT || 8000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(serveStatic(__dirname + "/client/dist"));

app.use(async (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});

app.use('/api', API);

app.listen(port);
console.log('Magic happens on port ' + port);
module.exports = app;