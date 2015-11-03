import curry from 'instant-curry';

export default curry( (fn, items) => items.map(fn) );
