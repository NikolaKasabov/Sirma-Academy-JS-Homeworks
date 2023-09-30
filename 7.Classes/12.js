function isValid(par) {
  return !(par === '' || par === undefined || par === null);
}

function calcAverageSalary(employees) {
  const averageSalary = employees.reduce((acc, cur, index, arr) => {
    if (index === (arr.length - 1)) {
      acc += cur.salary;
      return acc / arr.length;
    }

    return acc += cur.salary;
  }, 0);

  return averageSalary;
}

function getDepartmentWithHighestAverageSalary(departments) {
  // departments is an object
  const departmentsWithAverageSalary = [];

  for (let key in departments) {
    const departmentName = key;
    const averageSalary = calcAverageSalary(departments[key]);
    departmentsWithAverageSalary.push({
      department: departmentName,
      averageSalary
    });
  }

  return departmentsWithAverageSalary;
}

class Company {
  departments = {};

  addEmployee(name, salary, position, department) {
    if (!isValid(name) || !isValid(position) || !isValid(department) || (salary < 0)) {
      throw new Error('Invalid input!');
    }

    const employee = { name, salary, position };
    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }
    this.departments[department].push(employee);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const departmentsWithAverageSalary = getDepartmentWithHighestAverageSalary(this.departments);
    departmentsWithAverageSalary.sort((a, b) => b.averageSalary - a.averageSalary);
    const departmentWithHighestAverageSalary = departmentsWithAverageSalary[0];
    
    const bestDepartmentEmployees = this.departments[departmentWithHighestAverageSalary.department];
    bestDepartmentEmployees.sort((a, b) => {
      return (b.salary - a.salary) || (a.name.localeCompare(b.name));
    });

    let result = '';
    result += `Best Department is: ${departmentWithHighestAverageSalary.department}\n`;
    result += `Average salary: ${Number(departmentWithHighestAverageSalary.averageSalary).toFixed(2)}\n`
    bestDepartmentEmployees.forEach((employee, index, arr) => {
      if (index === arr.length - 1) {
        result += `${employee.name} ${employee.salary} ${employee.position}`;
      } else {
        result += `${employee.name} ${employee.salary} ${employee.position}\n`;
      }
    });

    return result;
  }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "cleaner", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
