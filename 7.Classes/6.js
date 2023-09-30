class Student {
  constructor(name, grade, averageScore) {
    this.name = name;
    this.grade = grade;
    this.averageScore = averageScore;
  }
}

class Grade {
  constructor(grade) {
    this.grade = grade;
    this.students = [];
  }

  getListOfStudents() {
    const studentsNames = this.students
      .reduce((acc, cur) => {
        acc.push(cur.name);
        return acc;
      }, [])
      .join(', ');
    
    return studentsNames;
  }

  getAverageScore() {
    const averageScore = this.students.reduce((acc, student, currentIndex) => {
      if (currentIndex === (this.students.length - 1)) {
        acc += student.averageScore;
        return acc / this.students.length;
      }

      return acc + student.averageScore;
    }, 0);

    return averageScore;
  }
}

function getStudents(arr) {
  const students = [];

  arr.forEach(string => {
    const strings = string.split(',');
    const name = strings[0].split('Student name:')[1].trim();

    const gradeIndex = strings[1].lastIndexOf(' ');
    const grade = Number(strings[1].slice(gradeIndex + 1));

    const scoreIndex = strings[2].lastIndexOf(' ');
    const averageScore = Number(strings[2].slice(scoreIndex + 1));

    if (averageScore >= 3) {
      const student = new Student(name, grade, averageScore);
      students.push(student);
    }
  });

  return students;
}

function f(arr) {
  const students = getStudents(arr);
  const grades = [];

  students.forEach(student => {
    let currentGradeObj = grades.find(gr => gr.grade === student.grade + 1);

    if (!currentGradeObj) {
      currentGradeObj = new Grade(student.grade + 1);
      grades.push(currentGradeObj);
    }

    currentGradeObj.students.push(student);
  });

  grades.sort((a, b) => a.grade - b.grade);

  grades.forEach(grade => {
    console.log(`${grade.grade} Grade`);
    console.log(`List of students: ${grade.getListOfStudents()}`);
    console.log(`Average annual score from last year: ${grade.getAverageScore().toFixed(2)}`);
    console.log('===');
  });
}



f([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);

f([
  'Student name: George, Grade: 5, Graduated with an average score: 2.75',
  'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
  'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
  'Student name: John, Grade: 9, Graduated with an average score: 2.90',
  'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
  'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);
