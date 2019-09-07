const addToFavorites = (favorites, item) => {
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].key === item.key) {
      return [...favorites];
    }
  }
  return [...favorites, { ...item }];
};

const removeFromFavorites = (favorites, item) =>
  favorites.filter(favorite => favorite.key !== item.key);

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return addToFavorites(state, action.payload);
    case "REMOVE":
      return removeFromFavorites(state, action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
