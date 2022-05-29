import { ProductManager } from "./ProductManager.js";
import { Product } from "./Product.js";
var productManager = new ProductManager();
document.getElementById('btn-save').addEventListener('click', save);
function save() {
    var name2 = document.getElementById('name');
    var number = document.getElementById('number');
    var company = document.getElementById('company');
    var date = document.getElementById('date');
    var year = document.getElementById('year');
    if (name2.value !== '' && number.value !== '' && company.value !== '' && date.value !== '' && year.value !== '') {
        var product_1 = new Product(name2.value, parseInt(number.value), company.value, date.value, year.value);
        productManager.add(product_1);
        window.location.href = "../html/user.html";
    }
    else {
        window.location.href = "../html/Err.html";
    }
}
//# sourceMappingURL=Main.js.map