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
var logPerson = function (user) {
    console.log("".concat(user.name, ", ").concat(user.age, ", ").concat(user.role));
};
persons.forEach(function (person) {
    var admin = __assign(__assign({}, person), { role: 'Администратор' });
    logPerson(admin);
});
