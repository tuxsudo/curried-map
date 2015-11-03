# curried-map

A curried way to map an array through a function.

```
import map from 'curried-map';

Promise.resolve([0,1,2])
	.then( map(a=>a*a) );
```


## API

### `map(fn, items)`

`fn` is any function compatible with [`[].map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

`items` is an array.

Returns a new array of mapped items.


### `map(fn)`

`fn` is any function compatible with [`[].map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Returns a new function expecting an array. When the returned function is executed, it produces the mapped array.

```
var squarer = map(n=>n*n);

squarer([2,3]); // [4, 9]
squarer([4,5]); // [16, 25]

```
