interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

// interface User {
//   idOnline?: boolean;
// }

interface Windows {
  isAuth?: boolean;
}

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearsOfBirth?: number;
}

interface Employee extends User, Person {
  contractStart: Date;
}
interface Dev extends Employee {
  skills: string[];
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
}

// class MyDeveleper implements Dev {

// }
