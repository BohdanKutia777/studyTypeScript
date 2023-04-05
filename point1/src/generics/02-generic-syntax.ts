// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T;
type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;

export function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray(1, 2, 3, 13, 3);
toArray('asd', 'asdasd');

function head(value: string): string;
function head(value: readonly T[]): undefined;
// function head(value: string[]): string;
// function head(value: string[][]): string[];
function head<T>(value: T[]): T;
// function head(value: Date[]): Date;
// function head(value: boolean[]): boolean;

function head(value: any): any {
  return value[0];
}
head(['12q', 'asdasd']);
interface ModelData<T> {
  title: string;
  value: T; //number, [] boolean
}

const obj1: ModelData<number> = {
  title: 'string',
  value: 12,
};

const head12 = <T>(value: T[]): T => value[0];

const obj2: ModelData<Array<number>> = {
  title: 'asdasd',
  value: [123, 123, 123, 123],
};
