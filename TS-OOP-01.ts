const UNWORKER = "Безработный";

// описывает экземпляры класса должностных единиц
class Job {
  private role: string; // наименование профессии
  private salary: number; //зарплата
  
  constructor(role: string, salary:number) {
    this.role = role;
    this.salary = salary;
  }
  
  work(personName:string):void { // показать чем занят работник
    console.log(`${personName} сейчас работает как ${this.role}`);
  }

  get getJob():string { // получить приватное свойство вне класса
    return this.role;
  }

  get getSalary():number { // получить приватное свойство вне класса
    return this.salary;
  }
}

class Person {
  private name:string; // имя 
  private job?:Job | string = UNWORKER; // профессия мб(если работает)/мнб(если безработный), экземпляр кл.Job
  
  constructor(name:string);
  constructor(name:string, job:Job | string);
  constructor(name:string, job?:Job | string) {
    this.name = name;
    if (job) {
      this.job = job;
    }
  }

  set changeJob(newJob:Job | string) {
    if (this.job && typeof this.job === 'object') {
      console.log(`${this.name} сменил профессию c ${this.job.getJob}  на ${newJob}`);
    } else {
      console.log(`${this.name} устроился на работу как ${newJob}`);
    }
    this.job = newJob;
  }

  getSalary():string {
    if (this.job){
      if (typeof this.job === 'object') {
        return `${this.job} получает ${this.job.getSalary} заработную плату`;
      } else {
        return `не достаточно сведений о зарплате ${this.job}`;
      }
    } else {
      return `${this.name} пока не работает`;
    }
  }

  work():void {
    if (this.job){
      if (typeof this.job === 'object') {
        console.log(`${this.name} приступил к работе как ${this.job.getJob}`);
      } else if (this.job === UNWORKER){
        console.log(`${this.name} пока не работает`);
      } else {
        console.log(`${this.name} приступил к работе как ${this.job}`);
      }
    } else {
      console.log(`${this.name} пока не работает`);
    }
  }
};

const worker1:Person = new Person('Остап');
console.log('worker1: ', worker1);

const worker2:Person = new Person('Петр');
// console.log('Зарплата worker2: ', worker2.getSalary());
// worker2.changeJob = 'Механик';
console.log('worker2: ', worker2);
// worker2.work();

const worker3:Person = new Person('Василий', 'Машинист бульдозера');
console.log('worker3: ', worker3);


const job1:Job = new Job('Механик', 1000);
// mechanic.role = 'Машинист бульдозера';
console.log('job1: ', job1);

const job2:Job = new Job('Машинист бульдозера', 700);
console.log('job2: ', job2);

const job3:Job = new Job('Рабочий', 400);
console.log('job3: ', job3);

worker1.work();
worker2.work();
worker3.work();

worker1.changeJob = job1.getJob;
worker2.changeJob = job2.getJob;
worker3.changeJob = job3.getJob;

worker1.work();
worker2.work();
worker3.work();
