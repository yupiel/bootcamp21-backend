const library = {
  movies: 32,
  books: 235882,
  games: 2,
};

const getCountForMediaType = (mediaType) => {
  return library[mediaType];
};

const addMediaType = (mediaType, { count }) => {
  if (count) library[mediaType] = count;
  else library[mediaType] = 0;
};

const deleteMediaType = (mediaType) => {
  delete library[mediaType];
}

module.exports = {getCountForMediaType, addMediaType, deleteMediaType}

//CRUD
