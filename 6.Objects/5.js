function f(arr) {
  const obj = {};

  arr.forEach(string => { 
    const name = string.slice(0, string.indexOf(' '));
    const phoneNumber = string.slice(string.indexOf(' ') + 1);
    obj[name] = phoneNumber;
  });

  Object.entries(obj).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}

f(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);
f(["Maria 123","Samantha 456","Nicole 789"]);
