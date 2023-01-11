import {
  addMovieToList,
  creatMarkup,
  creatStyle,
  moviseList,
  inputSearch,
  treggerMode,
  clearMoviseMurckup,

} from './dom.js'

const getData = (url) => fetch(url)
  .then(res => res.json())
  .then(data => data.Search)

let searchLast = null;

const debounce = (() => {
  let timer = null;
  return (cb, ms) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(cb, ms);
  }

})()

const inputSearchHandler = (e) => {
  debounce((c) => {

    const searchString = e.target.value.trim();
    if (searchString && searchString.length > 3 && searchLast !== searchString) {
      if(!treggerMode) clearMoviseMurckup(moviseList)
      getData(`http://www.omdbapi.com/?apikey=a8b12dfd&s=${searchString}`)
        .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
        .catch(console.log);
    }
    searchLast = searchString
  }, 2000)

};

export const appInit = () => {
  creatMarkup();
  creatStyle();
  inputSearch.addEventListener('keyup', inputSearchHandler);
}