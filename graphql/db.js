let movies = [
  {
    id: 1,
    name: "Star Wars",
    score: 5
  },
  {
    id: 2,
    name: "Avengers",
    score: 4
  },
  {
    id: 3,
    name: "TransFormers",
    score: 4
  },
  {
    id: 4,
    name: "Avatar",
    score: 3
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filterMovies = movies.filter(movie => movie.id === id);
  return filterMovies[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
