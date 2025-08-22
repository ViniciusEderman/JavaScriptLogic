class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

function mostMoney(students) {
  if (students.length === 1) {
    return students[0].name;
  }

  let result = {};
  let maiorValor = 0;
  let studentResult = "";
  let equal = [];

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let sum = student.fives * 5 + student.tens * 10 + student.twenties * 20;
    result[student.name] = sum;
    equal.push(sum);
  }

  const duplicate = [...new Set(equal)];
  if (duplicate.length === 1) {
    return "all";
  }

  for (let name in result) {
    if (result[name] > maiorValor) {
      maiorValor = result[name];
      studentResult = name;
    }
  }
  return studentResult;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

mostMoney([cam, geoff]);