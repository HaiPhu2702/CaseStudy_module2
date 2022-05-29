var product = JSON.parse(localStorage.getItem('product'));
function allProduct(product) {
    var countAllProduct = 0;
    for (var i = 0; i < product.length; i++) {
        countAllProduct++;
    }
    return countAllProduct;
}
var countAll = allProduct(product);
var addAllProduct = document.getElementById('all-product');
addAllProduct.innerHTML = countAll.toString();
function smaller100() {
    var countProductSmaller100 = 0;
    for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
        var value = product_1[_i];
        if (value.Number < 100) {
            countProductSmaller100++;
        }
    }
    return countProductSmaller100;
}
var productSmaller100 = smaller100();
var addProductSmaller100 = document.getElementById('smaller100');
addProductSmaller100.innerHTML = productSmaller100.toString();
//# sourceMappingURL=MainIndex.js.map