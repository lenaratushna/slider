const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      container = document.querySelector('.container'),
      slidesCount = mainSlide.querySelectorAll('div').length;

let aciveSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('wheel', event => {
    if(event.deltaY < 0) {
        changeSlide('up');
    } else {
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if(direction === 'up') {
        aciveSlideIndex++;
        if(aciveSlideIndex === slidesCount) {
            aciveSlideIndex = 0;
        }
    } else if(direction === 'down') {
        aciveSlideIndex--;
        if(aciveSlideIndex < 0) {
            aciveSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${aciveSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${aciveSlideIndex * height}px)`;
}

