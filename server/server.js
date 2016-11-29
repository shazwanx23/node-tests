const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo app v1.0'
	});
});

//GET /users
//return array of users
//array of objects
//user.name, age
app.get('/users', (req, res) => {
	res.send([
	{ name: 'shazwan', age: 21},
	{ name: 'friend1', age: 21},
	{ name: 'friend2', age: 21}
	]);
});

app.listen(3000);
module.exports.app = app;