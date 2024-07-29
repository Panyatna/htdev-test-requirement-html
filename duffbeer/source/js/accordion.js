const accordionButtons = document.querySelectorAll('.advantages-accordion__button');

const answers = accordionButtons.forEach(item => {
  item.addEventListener('click', (e) => {
    if (item.classList.contains('advantages-accordion__button--closed')) {
      e.currentTarget.classList.toggle('advantages-accordion__button--opened');
      item.classList.remove('advantages-accordion__button--closed');
    } else {
      item.classList.add('advantages-accordion__button--closed');
      item.classList.remove('advantages-accordion__button--opened');
    }
  });
});

export {answers};