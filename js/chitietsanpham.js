var imgMain = $('.img-main');
var imgBottoms = $$('.img-bottom img');
var arrImgBottom = Array.from(imgBottoms);
arrImgBottom.forEach((imgBottom) => {
    imgBottom.onclick = (e) => {
        e.target.src == 'http://127.0.0.1:5501/img/chitiet.jpg'
            ? imgMain.classList.add('img-main-2')
            : imgMain.classList.remove('img-main-2');
        arrImgBottom.forEach((imgBottom) => {
            imgBottom.classList.remove('bor-op');
        });
        e.target.classList.add('bor-op');
    };
});