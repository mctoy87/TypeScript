// задаем интерфейс пользователя
interface UserParams {
  id: number;
  firstname: string;
  surname: string;
  age: number;
};

// родительский абстрактный класс всех пользователей
abstract class Users <T extends UserParams> {
  protected userList: T[] = [];
  // метод добавления нового user
  public add (item: T):void {
    this.userList.push(item);
  };
  // метод удаления нового user/ false если не найден
  public remove (id: number):boolean {
    const index =  this.userList.map((item) => item.id).indexOf(id);
    // если индекс не найден - вернуть false
    if (index === -1) return false;
    // если же найден, то удалить из массива и вернуть true
    this.userList.splice(index, 1);
    return true;
  };

  // метод получения пользователя по id/ вернет null если не найден
  public get (id:number):T[]|null {
    const filteredList = this.userList.filter((item) => item.id === id);
    if (filteredList.length) return filteredList;
    return  null;
  }
};

// создадим интерфейс для Students
interface StudentsParams {
  id: number;
  firstname: string;
  surname: string;
  age: number;
  year: number;
  speciality: string;
}

// создадим интерфейс для Employees
interface EmployeesParams {
  id: number;
  firstname: string;
  surname: string;
  age: number;
  post: string;
}

// класс для студентов, отнаследованный от User
class Students extends Users<StudentsParams> {}

// класс для работающих, отнаследованный от User
class Employees extends Users<EmployeesParams> {}

// создадим список студентов
const students = new Students();

// создадим список работающих
const employees = new Employees();

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
console.log('Работник Настя: ', employees.get(222));
// все студенты
console.log('students: ', students);
// все работники
console.log('employees: ', employees);