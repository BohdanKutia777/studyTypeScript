function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

type ayncCb = (res: number) => number;
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: ayncCb): number;
function asyncSum(a: number, b: number, cb?: ayncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}
