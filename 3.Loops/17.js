function f(floors, rooms) {
  for (let i = floors; i > 0; i--) {
    let line = '';
    let letter = '';

    if (i === floors) {
      letter = 'L';
    } else if (i % 2 === 0) {
      letter = 'O';
    } else if (i % 2 !== 0) {
      letter = 'A';
    }

    for (let j = 0; j < rooms; j++) {
      if (j === rooms - 1) {
        line += `${letter}${i}${j}`;
      } else {
        line += `${letter}${i}${j} `;
      }
    }

    console.log(line);
  }
}

f(6, 4);
f(3, 3);
f(4, 4);
