let movies = [
  {
    id: "1",
    name: "Star Wars",
    score: 5
  },
  {
    id: "2",
    name: "Avengers",
    score: 4
  },
  {
    id: "3",
    name: "TransFormers",
    score: 4
  },
  {
    id: "4",
    name: "Avatar",
    score: 3
  }
];

export const getMovies = () => movies;

export const getByMoive = id => {
  const filterMovies = movies.filter(movie => movie.id === String(id));
  return filterMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
