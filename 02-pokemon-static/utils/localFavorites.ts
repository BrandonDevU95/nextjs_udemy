const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(id)) {
        favorites = favorites.filter((favorite) => favorite !== id);
        }
    else {
        favorites.push(id);
        }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    return favorites;
}

export default {
    toggleFavorites,
}