function f(arr) {
  const movies = [];

  // add movies
  arr.forEach(string => {
    if (string.includes('addMovie')) {
      const name = string.slice(string.indexOf(' ') + 1);
      const movie = { name };
      movies.push(movie);

    } else if (string.includes('directedBy')) {
      const [name, director] = string.split(' directedBy ');
      const movie = movies.find(m => m.name === name);
      if (movie) {
        movie.director = director;
      }

    } else if (string.includes('onDate')) {
      const [name, date] = string.split(' onDate ');
      const movie = movies.find(m => m.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  });

  // print only the movies with 'director' and 'date' properties
  movies.forEach(movie => { 
    if (movie.director && movie.date) {
      const json = JSON.stringify(movie);
      console.log(json);
    }
  });
}

f([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  ' Spinderman 2 onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
]);
f([
  'addMovie The Avengers',
  'addMovie Spiderman',
  'The Avengers directedBy Pesho Peshov',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
  'The Avengers directedBy Anthony Russo',
]);
