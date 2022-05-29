import product, {Product} from "./Product.js";

class ProductManager {

    list_product: Product[] = [];

    constructor() {
        this.list_product = [];
    }

    add(product: Product): void {
        this.list_product = this.loadData()
        if (!this.list_product) {
            localStorage.setItem('product', JSON.stringify(this.list_product))
        } else {
            this.list_product.push(product);
            localStorage.setItem('product', JSON.stringify(this.list_product))
        }
    }

    loadData() {
        let data = [];
        if (localStorage.hasOwnProperty('product')) {
            data = JSON.parse(localStorage.getItem('product'))
        }
        return data;
    }

    getDataAdmin() {
        return JSON.parse(localStorage.getItem('admin'));
    }


    showListProduct(product): void {
        let str = '';
        if (!product) {
            str = '<tr><td colspan="2">No data</td></tr>'
        }
        let productSort = this.Bublesort(product);
        localStorage.setItem('product', JSON.stringify(productSort));

        for (let i = 0; i < product.length; i++) {

            str += `<tr>`
            str += `<td style="text-align:center ;color: #918048;font-weight: bold">${i + 1}</td>`
            str += `<td style="text-align:center ;color: #964c2d;font-weight: bold">${product[i].NameProduct}</td>`
            str += `<td style="text-align:center ;color: #9b3b9b;font-weight: bold">${product[i].Number}</td>`
            str += `<td style="text-align:center ;color: #b72785;font-weight: bold">${product[i].Company}</td>`
            str += `<td style="text-align:center ;color: rgb(122,116,35);font-weight: bold">${product[i].ExpirationDate}</td>`
            str += `<td style="text-align:center ;color: deeppink;font-weight: bold">${product[i].YearOfProduction}</td>`
            str += `<td ><button type="button " value="${i}" class="btn btn-danger delete-user "  >Delete</button></td>`
            str += `<td ><button type="button" value="${i}" class="btn btn-warning update-user" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >Update</button></td>`
            str += `</tr>`
        }
        // str += `<td style=text-align:center"><button type="button " value="${i}"  class="btn btn-warning update-user modal"  tabindex="-1" role="dialog" >Update</button></td>`
        document.getElementById('list-body-table').innerHTML = str
    }

    Bublesort(product) {
        for (let i = 0; i < product.length - 1; i++) {
            for (let j = product.length - 1; j > i; j--) {
                if (product[j].Number < product[j - 1].Number) {
                    let temp = product[j];
                    product[j] = product[j - 1];
                    product[j - 1] = temp;
                }
            }
        }
        return product;
    }

    deleteUser(i: number): void {
        let product = this.loadData();
        product.splice(i, 1);
        localStorage.setItem('product', JSON.stringify(product))
        this.showListProduct(product);

    }


    search(){
        let productnew=JSON.parse(localStorage.getItem('product'));

        document.getElementById('input').addEventListener('keyup',(e)=>{
            let valueInput=e.target['value'];

          let valueFind=productnew.filter((value)=>{
           return (value.NameProduct.toUpperCase().includes(valueInput.toUpperCase())||
             parseInt( value.Number)==parseInt(valueInput)||
              value.Company.toUpperCase().includes(valueInput.toUpperCase()))



          })
          this.showListProduct(valueFind)

        })

    }

}


export {ProductManager};