function sum(a: number, b: number): number {
  return a + b;
}
const sum2 = (a: number, b: number): number => a + b;
const sum3 = function(a: number, b: number): number {
    return a + b; 
}

sum(2, 4);

function log(name: string, userId?: string): void {
  console.log('Hello', name, 'with Id', userId || 'anonym');
}
log('Bohdan', '123123');
function crash(): never {
  throw new Error('crash');
}

function average(...nums: number[]) {
  let sum = nums.reduce((acc, total) => acc + total);
  return sum / nums.length;
}
