// Create interfaces User and Admin
// Keys for User: login, email, password, isOnline, lastVisited
// Keys for Admin: login, email, password, isOnline, lastVisited, role

// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}
interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

const user1: User = {
  login: 'Anton',
  email: 'anton@gamil.com',
  password: '123wdasd1',
  isOnline: true,
  lastVisited: new Date(),
};
const admin: Admin = {
  login: 'Anton',
  email: 'anton@gamil.com',
  password: '123wdasd1',
  isOnline: true,
  lastVisited: new Date(),
  role: 'admin',
};
export function login(user: { login: string; password: string }): void {
  if (user.login.length > 0 || user.password.length > 0) {
    console.log('Your password or login is empty');
  }
  console.log(`Hello ${user.login}`);
}
login(user1);
login(admin);
