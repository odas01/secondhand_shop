var product = $('.product');
var productArray = [];
if (product) {
    var productItemObj = {};
    var productItems = $$('.product-item');
    for (var productItem of productItems) {
        let productName = productItem.querySelector('.product-name').innerText;
        let productPrice =
            productItem.querySelector('.product-price').innerText;
        productArray.push({
            path: productItem,
            name: productName.slice(0, productName.indexOf(' ')),
            price: parseInt(productPrice.replace(/\./g, '').replace('đ', '')),
        });
    }
}

//Liệt kê giá
function listedPrice(priceMin, priceMax) {
    var x = productArray.forEach((product) => {
        product.path.style = 'display: none';
        if (product.price >= priceMin && product.price <= priceMax) {
            product.path.style = 'display: flex';
        } else if (priceMin === priceMax && priceMin === 10000000) {
            if (product.price < priceMin) {
                product.path.style = 'display: flex';
            }
        } else if (priceMin === priceMax && priceMin === 30000000) {
            if (product.price > priceMin) {
                product.path.style = 'display: flex';
            }
        }
        if (priceMin === 'full') {
            product.path.style = 'display: flex';
        }
    });
}

var productColectPrice = $('#price');
var productColectName = $('#name');

productColectPrice.onclick = (e) => {
    if (e.target.nodeName === 'INPUT') {
        var x = e.target.value;
        if (x.includes('10000000') && !x.includes('-')) {
            var u = parseInt(x);
            listedPrice(u, u);
        } else if (x.includes('30000000') && !x.includes('-')) {
            var u = parseInt(x);
            listedPrice(u, u);
        } else if (x.includes('-')) {
            var u = x.split('-');
            listedPrice(parseInt(u[0]), parseInt(u[1]));
        } else if (x === 'full') listedPrice(x, x);
    }
};

// Tăng giảm giá
function sortPrice(command) {
    if (command === 'tang') {
        for (var i = 0; i <= productArray.length - 1; i++)
            for (var j = productArray.length - 1; j > i; j--)
                if (productArray[j].price < productArray[j - 1].price)
                    [productArray[j], productArray[j - 1]] = [
                        productArray[j - 1],
                        productArray[j],
                    ];
    } else if (command === 'giam') {
        for (var i = 0; i <= productArray.length - 1; i++)
            for (var j = productArray.length - 1; j > i; j--)
                if (productArray[j].price > productArray[j - 1].price)
                    [productArray[j], productArray[j - 1]] = [
                        productArray[j - 1],
                        productArray[j],
                    ];
    }
}

var productSelectWrap = $('.product-select-wrap');
var productSelectActive = $('.product-select-active');
var productSelectList = $('.product-select-item--list');
var productSelects = $$('.product-select-item--item');

for (var productSelect of productSelects) {
    productSelect.onclick = (e) => {
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

//hiện tất cả sản phẩm
productSelectWrap.onmousedown = (e) => {
    productSelectList.style = 'display: flex';
};
