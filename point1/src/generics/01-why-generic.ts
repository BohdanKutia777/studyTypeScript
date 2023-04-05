function head(value: string): string;
function head(value: string[]): string;
// function head(value: string[][]): string[];
function head(value: number[]): number;
function head(value: Date[]): Date;
function head(value: boolean[]): boolean;

function head(value: any): any {
  return value[0];
}
