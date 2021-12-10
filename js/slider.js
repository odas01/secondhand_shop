var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
window.addEventListener('load', slide);
function slide() {
    var slider = $('.slider');
    var sliderMain = $('.slider-main');
    var sliderItems = $$('.slider-item');

    var nextBtn = $('.slider-next');
    var prevBtn = $('.slider-prev');
    var dotsItems = $$('.slider-dots-item');

    var width = sliderItems[0].offsetWidth;
    var length = sliderItems.length;
    var positionX = 0;
    var index = 0;

    function addActive(dotItem) {
        Array.from(dotsItems).forEach((dotsItem) => {
            dotsItem.classList.remove('active');
        });
        dotItem.classList.add('active');
    }

    function handleChangeSlider(direction) {
        if (direction === 1) {
            if (index >= length - 1) {
                index = 0;
                positionX += width * (length - 1);
                sliderMain.style = `transform : translateX(${positionX}px)`;
                dotsItems[0].classList.add('active');
                dotsItems[length - 1].classList.remove('active');
                return;
            }
            index++;
            positionX -= width;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        } else if (direction === 0) {
            if (index <= 0) {
                index = 0;
                return;
            }
            index--;
            positionX += width;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        }
        addActive(dotsItems[index]);
    }

    nextBtn.addEventListener('click', () =>{
        handleChangeSlider(1);
    });
    prevBtn.addEventListener('click', () =>{
        handleChangeSlider(0);
    });

    Array.from(dotsItems).forEach( (dotsItem) => {
        dotsItem.addEventListener('click', (e) => {
            addActive(dotsItem);
            var slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * width;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        });
    });

    setInterval(() => {
        handleChangeSlider(1);
    }, 3000);
}
