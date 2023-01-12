export let moviseList = null;
export let inputSearch = null;
export let treggerMode = false;

const createElement = ({ 
  type,
  attrs,
  container,
  position = 'append',
  evt,
  handler,
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key !== 'innerHTML') el.setAttribute(key, attrs[key]);
    else el.innerHTML = attrs[key];
  });

  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);
  if (evt && handler && typeof handler === 'function') el.addEventListener(evt, handler)
  return el;
};

export const creatStyle = () => {
  createElement({
    type: 'style',
    attrs: {
      innerHTML: `*{
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      
      .container {
        width: min(100% - 40px, 1280px);
        margin-inline: auto;
       
      }
      
      .movise {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
       
      }
      
      .movie{
        display: flex;
        justify-content: center;
        align-content: center;
      }
      
      .movie__image {
        width: 100%;
        object-fit: cover;
      }
      
      .search {
        margin-bottom: 30px;
      }
      
      .search__label-input {
        display: block;
        margin-bottom: 7px;
      }
      
      .search__input {
        display: block;
        max-width: 400px;
        width: 100%;
        padding: 10px 15px;
        margin-bottom: 10px;
        border: 1px solid lightseagreen;
      }
      
      .search__label-checkbox {
        font-size: 12px;
        display: inline-block;
        transform: translate(7px, -2px);
      }`
    },
    container: document.head
  });

};

export const creatMarkup = () => {

  const container = createElement({
    type: 'div',
    attrs: { class: 'container' },
    container: document.body,
    position: 'prepend'
  });

  createElement({
    type: 'h1',
    attrs: { innerHTML: 'Додаток для пошуку фільмів' },
    container
  })

  const searchBox = createElement({
    type: 'div',
    attrs: { class: 'search' },
    container
  });

  const inputBox = createElement({
    type: 'div',
    attrs: { class: 'search__group search__group--input' },
    container: searchBox
  });

  const checkBox = createElement({
    type: 'div',
    attrs: { class: 'search__group search__group--checkbox' },
    container: searchBox
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-input',
      for: 'search',
      innerHTML: 'Пошук фільмів',
    },
    container: inputBox
  });

  inputSearch = createElement({
    type: 'input',
    attrs: {
      class: 'search__input',
      id: 'search',
      type: 'search',
      placeholder: 'Почніть пошук фільмів',
    },
    container: inputBox
  });

  createElement({
    type: 'input',
    attrs: {
      class: 'search__checkbox',
      id: 'checkbox',
      type: 'checkbox',
    },
    container: checkBox,
    evt: 'click',
    handler: () => treggerMode = !treggerMode
  });

  createElement({
    type: 'label',
    attrs: {
      class: 'search__label-checkbox',
      for: 'checkbox',
      innerHTML: 'Додати до існуючих фільмів',
    },
    container: checkBox
  });

  const movies = createElement({
    type: 'div',
    attrs: { class: 'movise' },
    container
  });

  moviseList = document.querySelector('.movise')
};

export const addMovieToList = (movie) => {
  const item = createElement({
    type: 'div',
    attrs: { class: 'movie' },
    container: moviseList
  });

  createElement({
    type: 'img',
    attrs: {
      class: 'movie__image',
      src: /(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/poster.jpg',
      alt: movie.Title,
      title: movie.Title
    },
    container: item
  });
};

export const clearMoviseMurckup = (el) => el && (el.innerHTML = '')
