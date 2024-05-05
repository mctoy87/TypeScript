var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
// persons array
var persons = [
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
persons[0] = __assign(__assign({}, persons[0]), { role: 'Администратор' });
persons[1] = __assign(__assign({}, persons[1]), { role: 'Администратор' });
// typeGuard for Person
var isAdmin = function (value) { return 'role' in value; };
var logPerson = function (person) {
    var information;
    if (isAdmin(person)) {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log("".concat(person.name, ", ").concat(person.age, ", ").concat(information));
};
persons.forEach(logPerson);
