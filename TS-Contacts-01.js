{
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
        console.log("".concat(user.name, ", ").concat(user.age, ", ").concat(user.family));
    };
    console.log('Users:');
    persons.forEach(logPerson);
}
