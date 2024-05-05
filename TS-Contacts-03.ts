{
  // User interface
interface User {
  name: string;
  age: number;
  group: string;
  family?: string,
  friends?: string[];
  isDied?: boolean;
};

// admin interface
interface Admin {
  name: string;
  age: number;
  role: string;
}

// type of role
type Person = User | Admin;

// persons array
const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Амаяк Акопян',
    age: 67,
    group: 'Иллюзионист',
    friends: ['Хрюша', 'Степаша'],
    isDied: false,
  },
  {
    name: 'Николай Дроздов',
    age: 86,
    group: 'Ученый',
    isDied: false,
  },
  {
    name: 'Павел Воля',
    age: 45,
    group: 'Артист',
    family: 'Ляйсан Утяшева'
  }
];

// give the administrator role for first and second person
persons[0] = { ...persons[0], role: 'Администратор' };
persons[1] = { ...persons[1], role: 'Администратор' };

// typeGuard for Person
const isAdmin = (value: User | Admin):value is Admin => 'role' in value;

const logPerson = (person: Person):void => {
  let information: string;
  if (isAdmin(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
}