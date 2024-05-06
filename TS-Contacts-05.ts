interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

// interface for filter Users,  описывает возможные критерии для фильтрации пользователей
interface UserCriteria {
  name?: string;
  age?: number;
  group?: string;
}

type Person = User | Admin;

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
  },
  {
      type: 'user',
      name: 'Екатерина Попова',
      age: 24,
      group: 'дизайнер сайтов'
  },
  {
      type: 'admin',
      name: 'Аркадий Паравозов',
      age: 55,
      role: 'Системный администратор'
  },
  {
      type: 'user',
      name: 'Даня Поперечный',
      age: 28,
      group: 'Комик'
  },
  {
      type: 'admin',
      name: 'Олег',
      age: 44,
      role: 'Модератор'
  }
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';
const isUser = (person: Person): person is User => person.type === 'user';

const logPerson = (person: Person) => {
  let information = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}
// отфильтровать массив `persons` и вернуть только те объекты, которые соответствуют критериям из `criteria`
const filterUsers = (persons: Person[], criteria: UserCriteria): User[] => //используем интерфейс `UserCriteria` в качестве типа для параметра `criteria`
persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof UserCriteria)[]; //используем `Object.keys(criteria)`, TS понимает, что ключи объекта ограничены св-ми из `UserCriteria`
    // TS все еще не может гарантировать, что все свойства `UserCriteria` являются свойствами `User`, мы явно приводим `fieldName` к типу `keyof User` с помощью `fieldName as keyof User`
    return criteriaKeys.every((fieldName) => user[fieldName as keyof User] === criteria[fieldName]);
  });


console.log('Users of age 24:');

filterUsers(
  persons,
  {
      age: 24
  }
).forEach(logPerson);