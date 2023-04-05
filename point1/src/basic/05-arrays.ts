const number = [1, 2, 31, 3, 123];

const str: string[] = [];
const strOne: Array<string> = [];
strOne.push('asdasd');

const cars: Car[] = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' });

const arrOfArr: string[][] = [];
arrOfArr.push(['12']);
function print(arr: unknown[]): void {
  arr.forEach((el, index) => {
    console.log(el, index);
  });
}
