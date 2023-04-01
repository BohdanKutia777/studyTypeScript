type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';

type Union3 = Union1 | Union2; // all variant

type Union4 = Union1 & Union2; // a | c
type Union6 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};
// const example: Union6 = {

// }
type User1 = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person1 = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearsOfBirth?: number;
};

type Employee1 = {
  contractStart: Date;
} & User1 &
  Person1;
// const user1: Employee1 = {
//   contractStart: new Date(),
// };
type Dev1 = {
  skills: string[];
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
} & Employee1;
