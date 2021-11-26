var product = document.querySelector('.product');
var productItems = product.querySelectorAll('.product-item');
var arrProductItem = Array.from(productItems);
arrProductItem.forEach(function (productItem, index) {
   var buyBtn = productItem.querySelector('.product-buy');
   var img = productItem.querySelector('.product-img').src;
   var name = productItem.querySelector('.product-name').innerText;
   var price = productItem
      .querySelector('.product-price')
      .innerText.split('đ')
      .join('')
      .split('.')
      .join('');
   buyBtn.onclick = function () {
      var objData = {
         img: img,
         name: name,
         price: price,
      };
      localStorage.setItem(index, JSON.stringify(objData));
      alert('Đã thêm vào giỏ hàng');
   };
});
