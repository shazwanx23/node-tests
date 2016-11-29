const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
	request(app)
		.get('/')
		.expect(404)
		.expect((res) => {
			expect(res.body).toInclude({
				error: 'Page not found.'
			});
		})
		.end(done);
});

//assert status = 200
//assert that you exist in users array
it('should return an array of users', (done) => {
	request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body).toInclude({
				name: 'shazwan',
				age: 21
			}).toBeA('object');
		})
		.end(done);
});