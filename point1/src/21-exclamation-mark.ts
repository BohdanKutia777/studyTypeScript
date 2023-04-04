let word: string | null = null;
const num = 10;
if (num > 5) {
  word = 'asd';
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullName: string = name!;
}

interface Person33 {
  name: string;
  age: number;
  sex: 'female' | 'male';
}

function printName2(person?: Person33) {
  console.log(person!.name);
}
