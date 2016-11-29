const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () =>{
	var res = utils.add(33, 11);

	expect(res).toBe(44).toBeA('number');
	

});

it('should square a number', () => {
	var res = utils.square(4);

	expect(res).toBe(16).toBeA('number');
});

it('should verify first and last names are set', () => {
	var user = {
		age: 21,
		location: 'my location'
	};
	utils.setName(user, 'shazwan shah');
	expect(user).toInclude({
		first_name: 'shazwan',
		last_name: 'shah'
	}).toBeA('object');
})

// it('should expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	// expect({name: 'shazwan'}).toEqual({name: 'shazwan'});
// 	// expect([2,3,4]).toExclude(5);
// 	expect({
// 		name: 'shazwan',
// 		age: 21,
// 		location: 'my location'
// 	}).toInclude({
// 		age: 21
// 	})
// });
