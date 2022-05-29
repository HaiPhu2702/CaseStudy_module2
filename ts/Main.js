"use strict";
exports.__esModule = true;
var ProductManager_js_1 = require("./ProductManager.js");
var Product_js_1 = require("./Product.js");
var productManager = new ProductManager_js_1.ProductManager();
document.getElementById('btn-save').addEventListener('click', save);
function save() {
    var name2 = document.getElementById('name');
    var number = document.getElementById('number');
    var company = document.getElementById('company');
    var date = document.getElementById('date');
    var year = document.getElementById('year');
    if (name2.value !== '' && number.value !== '' && company.value !== '' && date.value !== '' && year.value !== '') {
        var product = new Product_js_1.Product(name2.value, parseInt(number.value), company.value, date.value, year.value);
        productManager.add(product);
        window.location.href = "../html/user.html";
    }
    else {
        window.location.href = "../html/Err.html";
    }
}
