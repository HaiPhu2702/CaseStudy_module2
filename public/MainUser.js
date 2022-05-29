import { ProductManager } from "./ProductManager.js";
var productManager = new ProductManager();
var product = productManager.loadData();
productManager.showListProduct(product);
//delete
function delete_user() {
    var deleteButton = document.getElementsByClassName('delete-user');
    var _loop_1 = function (i) {
        deleteButton[i].addEventListener('click', function () {
            var yes = confirm("are you sure?");
            if (yes) {
                var index = deleteButton[i].getAttribute('value');
                productManager.deleteUser(+index);
                // // goi lai ham uplodate de cap nhat deleteUserButtons
                delete_user();
            }
            else {
                window.location.href = '../html/user.html';
            }
        });
    };
    for (var i = 0; i < deleteButton.length; i++) {
        _loop_1(i);
    }
    update_user();
}
delete_user();
//update
function update_user() {
    var product = productManager.loadData();
    var updateButton = document.getElementsByClassName('update-user');
    var _loop_2 = function (i) {
        updateButton[i].addEventListener('click', function () {
            var nameOld = product[i].NameProduct;
            var numberOld = product[i].Number;
            var companyOld = product[i].Company;
            var ExpirationDate = product[i].ExpirationDate;
            var year = product[i].YearOfProduction;
            document.getElementById('nameUpdate')["value"] = nameOld;
            document.getElementById('numberUpdate')["value"] = numberOld;
            document.getElementById('companyUpdate')["value"] = companyOld;
            document.getElementById('dateUpdate')["value"] = ExpirationDate;
            document.getElementById('yearUpdate')["value"] = year;
            document.getElementById('sendMessage').addEventListener('click', function () {
                var yes = confirm("are you sure?");
                if (yes) {
                    var name2 = document.getElementById('nameUpdate');
                    var number = document.getElementById('numberUpdate');
                    var company = document.getElementById('companyUpdate');
                    var date = document.getElementById('dateUpdate');
                    var year_1 = document.getElementById('yearUpdate');
                    product[i].NameProduct = name2.value;
                    product[i].Number = parseInt(number.value);
                    product[i].Company = company.value;
                    product[i].ExpirationDate = date.value;
                    product[i].YearOfProduction = year_1.value;
                    localStorage.setItem('product', JSON.stringify(product));
                    productManager.showListProduct(product);
                    window.location.href = '../html/user.html';
                }
                else {
                    window.location.href = '../html/user.html';
                }
            });
        });
    };
    for (var i = 0; i < updateButton.length; i++) {
        _loop_2(i);
    }
}
productManager.search();
//# sourceMappingURL=MainUser.js.map