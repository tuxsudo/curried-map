import test from 'tape';
import map from '../index';

test('Curry Map', t=> {
	t.plan(4);

	let addOne = n=>n+1;

	let two = map(addOne)([1]).reduce((l,c)=>l+c, 0);
	t.equal(2, two, 'it curries map functionality');

	Promise.resolve([0,1,2,3,4])
		.then( map(addOne) )
		.then(a=>{
			t.equal(15, a.reduce((l,c)=>l+c, 0), 'it expects fn first, array second');
		})

	let squarer = map(n=>n*n);
	t.deepEqual( squarer([2,3]), [4, 9] );
	t.deepEqual( squarer([4,5]), [16, 25] );



});
