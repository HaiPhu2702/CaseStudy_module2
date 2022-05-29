"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.list_product = [];
        this.list_product = [];
    }
    ProductManager.prototype.add = function (product) {
        this.list_product = this.loadData();
        if (!this.list_product) {
            localStorage.setItem('product', JSON.stringify(this.list_product));
        }
        else {
            this.list_product.push(product);
            localStorage.setItem('product', JSON.stringify(this.list_product));
        }
    };
    ProductManager.prototype.loadData = function () {
        var data = [];
        if (localStorage.hasOwnProperty('product')) {
            data = JSON.parse(localStorage.getItem('product'));
        }
        return data;
    };
    ProductManager.prototype.getDataAdmin = function () {
        return JSON.parse(localStorage.getItem('admin'));
    };
    ProductManager.prototype.showListProduct = function (product) {
        var str = '';
        if (!product) {
            str = '<tr><td colspan="2">No data</td></tr>';
        }
        var productSort = this.Bublesort(product);
        localStorage.setItem('product', JSON.stringify(productSort));
        for (var i = 0; i < product.length; i++) {
            str += "<tr>";
            str += "<td>".concat(i + 1, "</td>");
            str += "<td>".concat(product[i].NameProduct, "</td>");
            str += "<td>".concat(product[i].Number, "</td>");
            str += "<td>".concat(product[i].Company, "</td>");
            str += "<td>".concat(product[i].ExpirationDate, "</td>");
            str += "<td>".concat(product[i].YearOfProduction, "</td>");
            str += "<td><button type=\"button \" value=\"".concat(i, "\" class=\"btn btn-danger delete-user \"  >Delete</button></td>");
            str += "<td><button type=\"button\" value=\"".concat(i, "\" class=\"btn btn-warning update-user\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" >Update</button></td>");
            str += "</tr>";
        }
        // str += `<td><button type="button " value="${i}"  class="btn btn-warning update-user modal"  tabindex="-1" role="dialog" >Update</button></td>`
        document.getElementById('list-body-table').innerHTML = str;
    };
    ProductManager.prototype.Bublesort = function (product) {
        for (var i = 0; i < product.length - 1; i++) {
            for (var j = product.length - 1; j > i; j--) {
                if (product[j].Number < product[j - 1].Number) {
                    var temp = product[j];
                    product[j] = product[j - 1];
                    product[j - 1] = temp;
                }
            }
        }
        return product;
    };
    ProductManager.prototype.deleteUser = function (i) {
        var product = this.loadData();
        product.splice(i, 1);
        localStorage.setItem('product', JSON.stringify(product));
        this.showListProduct(product);
    };
    ProductManager.prototype.CountProduct = function (product) {
        var count = 0;
        for (var i = 0; i < product.length; i++) {
            count++;
        }
        return count;
    };
    ProductManager.prototype.search = function () {
        var _this = this;
        var productnew = JSON.parse(localStorage.getItem('product'));
        document.getElementById('search').addEventListener('click', function (event) {
            document.getElementById('backAfterFind').style.display = "block";
            document.getElementById('backAfterFind').addEventListener('click', function (event) {
                _this.showListProduct(productnew);
                window.location.href = '../html/user.html';
            });
            var Input = document.getElementById('input');
            var valueInput = Input.value;
            for (var _i = 0, productnew_1 = productnew; _i < productnew_1.length; _i++) {
                var value = productnew_1[_i];
                var valueFind = [];
                if (value.NameProduct == valueInput) {
                    valueFind.push(value);
                    _this.showListProduct(valueFind);
                }
                if (value.Number == valueInput) {
                    valueFind.push(value);
                    _this.showListProduct(valueFind);
                }
            }
        });
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
