function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;

function head(value: string | number[] | boolean[]): string | number | boolean {
  return value[0];
}

head('asdasd');
head([123, 12312, 1231]);
head([true, false, false]);
