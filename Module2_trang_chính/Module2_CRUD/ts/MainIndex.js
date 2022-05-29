var product = JSON.parse(localStorage.getItem('product'));
function count_product1(product) {
    var count1 = 0;
    for (var i = 0; i < product.length; i++) {
        count1++;
    }
    return count1;
}
var countAll = count_product1(product);
var myContainer = document.getElementById('all-product');
myContainer.innerHTML = countAll.toString();
