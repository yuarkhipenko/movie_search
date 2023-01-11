export let moviseList = null;
export let inputSearch = null;
export let treggerMode = false;

const createElement = ({ type,
  attrs,
  container,
  position = 'append',
  evt,
  hendler,
}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach((key) => {
    if (key !== 'innerHTML') el.setAttribute(key, attrs[key]);
    else el.innerHTML = attrs[key];
  });

  if (container && position === 'append') container.append(el);
  if (container && position === 'prepend') container.prepend(el);
  if (evt && hendler && typeof hendler === 'function') el.addEventListener(evt, hendler)
  return el;
};

export const creatStyle = () => {
  createElement({
    type: 'style',
    attrs: {
      innerHTML: ``
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
    hendler: () => treggerMode = !treggerMode
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
