{
// User interface
interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

// admin interface
interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

// type of role
type Person = User | Admin;

// persons array
const persons: Person[] = [
  {
    type: 'admin',
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'музыкант',
  }
];

const isAdmin = (person: Person):person is Admin => person.type === 'admin';

const isUser = (person: Person):person is User => person.type === 'user';

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
}