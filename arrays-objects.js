const printNewLine = question => {
  console.log(`\n\n------------------ Answer Q${question} ------------------ \n`)
}

// ANSWERS ARE BELOW MOVIES ARRAY
// ANSWERS ARE BELOW MOVIES ARRAY
// ANSWERS ARE BELOW MOVIES ARRAY
// ANSWERS ARE BELOW MOVIES ARRAY
// ANSWERS ARE BELOW MOVIES ARRAY
// ANSWERS ARE BELOW MOVIES ARRAY

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

printNewLine(11)

const deleteProp = (object, property) => {
  console.log(object)
  delete object[property]
  console.log(object)
}

deleteProp(movies[0], 'Type')

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

printNewLine(12)

const oldestMovie = () => {
  let oldestMovieYear = movies[0].Year
  let oldestMovieTitle

  for (let i = 0; i < movies.length; i++) {
      if (movies[i].Year < oldestMovieYear) {
          oldestMovieYear = movies[i].Year
          oldestMovieTitle = movies[i].Title
      }
  }

  console.log(`${oldestMovieTitle} - ${oldestMovieYear}`)
}

oldestMovie()

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

printNewLine(13)

const countMovies = () => {
  console.log(movies.length)
}

countMovies()

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

printNewLine(14)

let movieTitles = []

const onlyTheTitles = () => {
    for (movie of movies) {
        movieTitles.push(movie.Title)
    }
}

onlyTheTitles()
console.log(movieTitles)

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

printNewLine(15)

let moviesThisMillenium = []

const onlyInThisMillennium = () => {
    for (movie of movies) {
        if (movie.Year >= 2000) {
            moviesThisMillenium.push(movie.Title)
        }
    }
}

onlyInThisMillennium() 
console.log(moviesThisMillenium)

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

printNewLine(16)

const getMovieById = (id) => {
  let movieId = []
  for (movie of movies) {
      movieId.push(movie.imdbID)
  }

  let indexOfMovie = movieId.indexOf(id)
  console.log(movies[indexOfMovie].Title)
}

getMovieById('tt0848228')

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

printNewLine(17)

const sumAllTheYears = () => {
  let sumOfMovieYears = 0
  for (movie of movies) {
      sumOfMovieYears += parseInt(movie.Year)
  }
  console.log(sumOfMovieYears)
}

sumAllTheYears()

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

printNewLine(18)

const searchByTitle = movieName => {

  let searchResults = []
  
  for (let i = 0; i < movies.length; i++) {
      let searchValue = movies[i]['Title'].search(movieName)
      if (searchValue >= 0) {
          searchResults.push(movies[i]['Title'])
      }
  }
  
  console.log(searchResults)
}

searchByTitle('Avengers')


/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/

printNewLine(19)

const searchAndDivide = movieName => {

  let match = []
  let unmatch = []
      
  for (let i = 0; i < movies.length; i++) {
      let searchValue = movies[i]['Title'].search(movieName)
      if (searchValue >= 0) {
          match.push(movies[i])
      } else {
          unmatch.push(movies[i])
      }
  }
  
  console.log(match)
  console.log(unmatch)
}

searchAndDivide('Lord')

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/
printNewLine(20)

const removeIndex = index => {
  movies.splice(index, 1)
  console.log(movies)
}

removeIndex(12)


// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

printNewLine(21)

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

printNewLine(22)

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

printNewLine(23)

const isItPrime = number => {
  if ((number > 2) && (number % 2 === 0)) {
      return false
  } else if ((number > 3) && (number % 3 === 0)) {
      return false
  } else if ((number > 7) && (number % 7 === 0)) {
      return false
  } else {
      return true
  }
}

console.log(isItPrime(49))
