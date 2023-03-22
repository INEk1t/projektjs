/* Переключение панели элементов при нажатии на кнопку-плюс */
const addButtonElements = document.querySelectorAll('.add-btn');
let showAddMenuHandler = function(evt) {
    const parentElement = evt.target.parentNode; 
    const addMenuElement = parentElement.querySelector('.choose-elem');
    addMenuElement.classList.toggle('hidden');
}
addButtonElements.forEach(function (item) {
    return item.addEventListener('click', showAddMenuHandler);
 });


/* Переключение шаблонов сайта */
const changeLayoutHandler = function (evt) {
    const newLayout = evt.target.value;
    const layoutElement = document.querySelector('.layout');
    layoutElement.classList.remove('layout--landing'); 
    layoutElement.classList.remove('layout--blog');
    layoutElement.classList.remove('layout--shop');
    layoutElement.classList.add('layout--' + newLayout); 
};
document.querySelector('.grid-select').addEventListener('change', changeLayoutHandler);

/* Добавление элементов */
const chooseButtonElements = document.querySelectorAll('.choose-elem__btn');

const addElementHandler = function (evt) { 
    const clickedBtn = evt.target;
    const addMenuElement = clickedBtn.parentNode; 
    addMenuElement.classList.add('hidden'); 

    const blockType = clickedBtn.dataset.type; 
    const blockContainer = clickedBtn.dataset.container;

    const template = document.querySelector('#' + blockType + '-template').content;
    const templateElement = template.cloneNode(true);
    const blockElement = templateElement.querySelector('.element');

    const containerWrapperElement = document.querySelector('.' + blockContainer + '__elements-wrapper');
    containerWrapperElement.append(blockElement);

    if (blockContainer.includes('content')) {
        containerWrapperElement.parentElement.classList.remove('content--empty');
    } else {
        containerWrapperElement.parentElement.classList.remove(blockContainer + '--empty');
    }
}

chooseButtonElements.forEach(function (item) {
  return item.addEventListener('click', addElementHandler);
});
