window.addEventListener('load', function () {
    var slider = document.querySelector('.slider');
    var sliderMain = document.querySelector('.slider-main');
    var sliderItems = document.querySelectorAll('.slider-item');
    var nextBtn = document.querySelector('.slider-next');
    var prevBtn = document.querySelector('.slider-prev');
    var dotsItems = document.querySelectorAll('.slider-dots-item');
    var sliderItemWidth = sliderItems[0].offsetWidth;
    var sliderLength = sliderItems.length;
    var positionX = 0;
    var index = 0;

    function handleChangeSlider(direction) {
        if (direction) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            index++;
            positionX -= sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        } else {
            if (index <= 0) {
                index = 0;
                return;
            }
            index--;
            positionX += sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        }
        Array.from(dotsItems).forEach(function (dotsItem) {
            dotsItem.classList.remove('active');
        });
        dotsItems[index].classList.add('active');
    }

    nextBtn.addEventListener('click', function () {
        handleChangeSlider(1);
    });
    prevBtn.addEventListener('click', function () {
        handleChangeSlider(0);
    });

    Array.from(dotsItems).forEach(function (dotsItem) {
        dotsItem.addEventListener('click', function (e) {
            Array.from(dotsItems).forEach(function (dotsItem) {
                dotsItem.classList.remove('active');
            });
            dotsItem.classList.add('active');
            var slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
        });
    });
});
