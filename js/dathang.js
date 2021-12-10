var product = document.querySelector('.product');
var productItems = product.querySelectorAll('.product-item');
var arrProductItem = Array.from(productItems);
arrProductItem.forEach((productItem, index) => {
    var buyBtn = productItem.querySelector('.product-buy');
    var img = productItem.querySelector('.product-img').src;
    var name = productItem.querySelector('.product-name').innerText;
    var price = productItem
        .querySelector('.product-price')
        .innerText.replace(/\./g, '')
        .replace('đ', '');
    buyBtn.onclick = () => {
        var objData = {
            img: img,
            name: name,
            price: price,
        };
        localStorage.setItem(index, JSON.stringify(objData));
        alert('Đã thêm vào giỏ hàng');
    };

    var heartElement = productItem.querySelector('.product-heart');
    var i = 0;
    heartElement.onclick = (e) => {
        // e.stopPropagation();
        heartElement.style.color = (i++ % 2) == 0 ?'#eb4d4b' :'#95afc0';
        console.log(i);
    };
});
