var persons = [
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
var isAdmin = function (person) { return person.type === 'admin'; };
var isUser = function (person) { return person.type === 'user'; };
var logPerson = function (person) {
    var information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(information));
};
// отфильтровать массив `persons` и вернуть только те объекты, которые соответствуют критериям из `criteria`
var filterUsers = function (persons, criteria) {
    return persons.filter(isUser).filter(function (user) {
        var criteriaKeys = Object.keys(criteria); //используем `Object.keys(criteria)`, TS понимает, что ключи объекта ограничены св-ми из `UserCriteria`
        // TS все еще не может гарантировать, что все свойства `UserCriteria` являются свойствами `User`, мы явно приводим `fieldName` к типу `keyof User` с помощью `fieldName as keyof User`
        return criteriaKeys.every(function (fieldName) { return user[fieldName] === criteria[fieldName]; });
    });
};
console.log('Users of age 24:');
filterUsers(persons, {
    age: 24
}).forEach(logPerson);
