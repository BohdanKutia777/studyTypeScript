import { average } from '../basic/02-functions';

let str23 = 'Hello world';
type x = typeof str23;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);
