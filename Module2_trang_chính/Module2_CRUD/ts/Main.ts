
import {ProductManager} from "./ProductManager.js";
import {Product} from "./Product.js";
let productManager=new ProductManager();

document.getElementById('btn-save').addEventListener('click',save)


function save(){
 let name2 = document.getElementById('name') as HTMLInputElement;
let number = document.getElementById('number') as HTMLInputElement;
let company=document.getElementById('company') as HTMLInputElement;
let date=document.getElementById('date') as HTMLInputElement;
let year=document.getElementById('year') as HTMLInputElement;


if(name2.value !=='' &&  number.value !=='' && company.value  !=='' && date.value !=='' && year.value !==''){
    let product=new Product(name2.value,parseInt(number.value),company.value,date.value,year.value);
    productManager.add(product);
    window.location.href="../html/user.html"

}else {
    window.location.href="../html/Err.html"
}

}




