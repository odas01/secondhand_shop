var product = document.querySelector('.product');
var productArray = [];
if (product) {
   var productItemObj = {};
   var productItems = product.querySelectorAll('.product-item');
   for (var productItem of productItems) {
      var productPrice = productItem.querySelector('.product-price').innerText;
      var productName = productItem.querySelector('.product-name').innerText;
      var getPrices = productPrice.split(' ')[0].split('.');
      var priceString = '';
      for (var getPrice of getPrices) {
         priceString += getPrice;
      }
      productArray.push({
         path: productItem,
         name: productName.slice(0, productName.indexOf(' ')),
         price: Number.parseInt(priceString),
      });
   }
}

//Liệt kê giá
function listedPrice(priceMin, priceMax) {
   var x = productArray.forEach(function (product) {
      product.path.style.display = 'none';
      if (product.price >= priceMin && product.price <= priceMax) {
         product.path.style.display = 'flex';
      } else if (priceMin == priceMax && priceMin == 10000000) {
         if (product.price < priceMin) {
            product.path.style.display = 'flex';
         }
      } else if (priceMin == priceMax && priceMin == 30000000) {
         if (product.price > priceMin) {
            product.path.style.display = 'flex';
         }
      }
      if (priceMin === 'full') {
         product.path.style.display = 'flex';
      }
   });
}

var productColectPrice = document.querySelector('#price');
var productColectName = document.querySelector('#name');

productColectPrice.onclick = function (e) {
   if (e.target.nodeName === 'INPUT') {
      var x = e.target.value;
      if (x.includes('10000000') && !x.includes('-')) {
         var u = Number.parseInt(x);
         listedPrice(u, u);
      } else if (x.includes('30000000') && !x.includes('-')) {
         var u = Number.parseInt(x);
         listedPrice(u, u);
      } else if (x.includes('-')) {
         var u = x.split('-');
         listedPrice(Number.parseInt(u[0]), Number.parseInt(u[1]));
      } else if (x === 'full') {
         listedPrice(x, x);
      }
   }
};

// Tăng giảm giá
function sortPrice(command) {
   if (command === 'tang') {
      for (var i = 0; i <= productArray.length - 1; i++) {
         for (var j = productArray.length - 1; j > i; j--) {
            if (productArray[j].price < productArray[j - 1].price) {
               var tmp = productArray[j];
               productArray[j] = productArray[j - 1];
               productArray[j - 1] = tmp;
            }
         }
      }
   } else if (command === 'giam') {
      for (var i = 0; i <= productArray.length - 1; i++) {
         for (var j = productArray.length - 1; j > i; j--) {
            if (productArray[j].price > productArray[j - 1].price) {
               var tmp = productArray[j];
               productArray[j] = productArray[j - 1];
               productArray[j - 1] = tmp;
            }
         }
      }
   }
}

var productSelectWrap = document.querySelector('.product-select-wrap');
var productSelectActive = document.querySelector('.product-select-active');
var productSelectList = document.querySelector('.product-select-item--list');
var productSelects = document.querySelectorAll('.product-select-item--item');

for (var productSelect of productSelects) {
   productSelect.onclick = function (e) {
      //js thẻ active
      var x = e.target.innerText;
      productSelectActive.innerHTML = x;
      productSelectList.style.display = 'none';

      //sắp xếp sản phẩm
      sortPrice(e.target.id);
      i = 1;
      for (var productArrItem of productArray) {
         productArrItem.path.style.order = i;
         i++;
      }
   };
}

productSelectWrap.onmousedown = function (e) {
   productSelectList.style.display = 'flex';
};

