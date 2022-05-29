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
            str += "<td style=\"text-align:center ;color: #918048;font-weight: bold\">".concat(i + 1, "</td>");
            str += "<td style=\"text-align:center ;color: #964c2d;font-weight: bold\">".concat(product[i].NameProduct, "</td>");
            str += "<td style=\"text-align:center ;color: #9b3b9b;font-weight: bold\">".concat(product[i].Number, "</td>");
            str += "<td style=\"text-align:center ;color: #b72785;font-weight: bold\">".concat(product[i].Company, "</td>");
            str += "<td style=\"text-align:center ;color: rgb(122,116,35);font-weight: bold\">".concat(product[i].ExpirationDate, "</td>");
            str += "<td style=\"text-align:center ;color: deeppink;font-weight: bold\">".concat(product[i].YearOfProduction, "</td>");
            str += "<td ><button type=\"button \" value=\"".concat(i, "\" class=\"btn btn-danger delete-user \"  >Delete</button></td>");
            str += "<td ><button type=\"button\" value=\"".concat(i, "\" class=\"btn btn-warning update-user\" data-toggle=\"modal\" data-target=\"#exampleModal\" data-whatever=\"@mdo\" >Update</button></td>");
            str += "</tr>";
        }
        // str += `<td style=text-align:center"><button type="button " value="${i}"  class="btn btn-warning update-user modal"  tabindex="-1" role="dialog" >Update</button></td>`
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
    ProductManager.prototype.search = function () {
        var _this = this;
        var productnew = JSON.parse(localStorage.getItem('product'));
        document.getElementById('input').addEventListener('keyup', function (e) {
            var valueInput = e.target['value'];
            var valueFind = productnew.filter(function (value) {
                return (value.NameProduct.toUpperCase().includes(valueInput.toUpperCase()) ||
                    parseInt(value.Number) == parseInt(valueInput) ||
                    value.Company.toUpperCase().includes(valueInput.toUpperCase()));
            });
            _this.showListProduct(valueFind);
        });
    };
    return ProductManager;
}());
export { ProductManager };
//# sourceMappingURL=ProductManager.js.map