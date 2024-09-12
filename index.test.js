import { strict as assert } from 'node:assert';

import { capitalize } from './index.js';

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

console.log('All tests passed');
