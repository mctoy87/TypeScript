  type User = {
    name: string;
    age: number;
    group?: string;
    family?: string,
    friends?: string[];
    isDied?: boolean;
  };


type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

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

const logPerson = (user: Admin) => {
  console.log(`${user.name}, ${user.age}, ${user.role}`);
};

persons.forEach((person) => {
  const admin: Admin = {...person, role: 'Администратор'};
  logPerson(admin);
});