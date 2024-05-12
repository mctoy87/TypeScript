var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
// родительский абстрактный класс всех пользователей
var Users = /** @class */ (function () {
    function Users() {
        this.userList = [];
    }
    // метод добавления нового user
    Users.prototype.add = function (item) {
        this.userList.push(item);
    };
    ;
    // метод удаления нового user/ false если не найден
    Users.prototype.remove = function (id) {
        var index = this.userList.map(function (item) { return item.id; }).indexOf(id);
        // если индекс не найден - вернуть false
        if (index === -1)
            return false;
        // если же найден, то удалить из массива и вернуть true
        this.userList.splice(index, 1);
        return true;
    };
    ;
    // метод получения пользователя по id/ вернет null если не найден
    Users.prototype.get = function (id) {
        var filteredList = this.userList.filter(function (item) { return item.id === id; });
        if (filteredList.length)
            return filteredList;
        return null;
    };
    return Users;
}());
;
// класс для студентов, отнаследованный от User
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Students;
}(Users));
// класс для работающих, отнаследованный от User
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employees;
}(Users));
// создадим список студентов
var students = new Students();
// создадим список работающих
var employees = new Employees();
// добавим в список студента
students.add({
    id: 123,
    firstname: 'Петр',
    surname: 'Мамонов',
    age: 18,
    year: 2023,
    speciality: 'JS',
});
// добавим в список студента
students.add({
    id: 456,
    firstname: 'Николай',
    surname: 'Истомин',
    age: 43,
    year: 2024,
    speciality: 'WEB',
});
// добавим в список студента
students.add({
    id: 789,
    firstname: 'Олег',
    surname: 'Полуев',
    age: 55,
    year: 2022,
    speciality: 'Front',
});
// добавим в список студента
students.add({
    id: 234,
    firstname: 'Елена',
    surname: 'Малинова',
    age: 27,
    year: 2024,
    speciality: 'Front',
});
// добавим в список студента
students.add({
    id: 567,
    firstname: 'Вера',
    surname: 'Страхова',
    age: 31,
    year: 2023,
    speciality: 'WEB',
});
// добавим в список работника
employees.add({
    id: 111,
    firstname: 'Евгений',
    surname: 'Филипов',
    age: 31,
    post: 'Преподаватель'
});
// добавим в список работника
employees.add({
    id: 222,
    firstname: 'Настя',
    surname: 'Прохоренко',
    age: 27,
    post: 'Преподаватель'
});
// удалим студента из списка
console.log('Получилось удалить студента ', students.remove(123));
// поиск студента по id
console.log('Cтудент Николай: ', students.get(456));
// удалим работника из списка
console.log('Получилось удалить работника ', employees.remove(111));
// поиск работника по id
console.log('Cтудент Николай: ', employees.get(222));
// все студенты
console.log('students: ', students);
// все работники
console.log('employees: ', employees);
