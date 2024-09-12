import { capitalize } from './index.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Error, wrong answer');
}

if (capitalize('') !== '') {
  throw new Error('Error, wrong answer');
}

console.log('All tests passed');
