import {ProductManager} from "./ProductManager.js";

let productManager = new ProductManager();

let product = productManager.loadData();


productManager.showListProduct(product);



//delete
function delete_user() {
    let deleteButton = document.getElementsByClassName('delete-user');
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', () => {
           let yes= confirm("are you sure?")
            if(yes){
                let index = deleteButton[i].getAttribute('value');
                productManager.deleteUser(+index);

                // // goi lai ham uplodate de cap nhat deleteUserButtons
                delete_user();
            }else {
                window.location.href='../html/user.html'
            }

        })
    }
    update_user();

}
delete_user();



//update
function update_user(){
    let product = productManager.loadData();

    let updateButton=document.getElementsByClassName('update-user');
    for (let i = 0; i < updateButton.length; i++) {
        updateButton[i].addEventListener('click',  () => {
           let nameOld= product[i].NameProduct;
           let numberOld= product[i].Number;
           let companyOld= product[i].Company;
            let ExpirationDate= product[i].ExpirationDate;
            let year =product[i].YearOfProduction;




           document.getElementById('nameUpdate')["value"]=nameOld;
           document.getElementById('numberUpdate')["value"]=numberOld;
           document.getElementById('companyUpdate')["value"]=companyOld;
           document.getElementById('dateUpdate')["value"]=ExpirationDate;
           document.getElementById('yearUpdate')["value"]=year;



            document.getElementById('sendMessage').addEventListener('click',()=>{
                let yes= confirm("are you sure?")
                if(yes){
                    let name2 = document.getElementById('nameUpdate') as HTMLInputElement;
                    let number = document.getElementById('numberUpdate') as HTMLInputElement;
                    let company=document.getElementById('companyUpdate') as HTMLInputElement;
                    let date=document.getElementById('dateUpdate') as HTMLInputElement;
                    let year=document.getElementById('yearUpdate') as HTMLInputElement;



                    product[i].NameProduct=name2.value
                    product[i].Number=parseInt(number.value);
                    product[i].Company=company.value
                    product[i].ExpirationDate=date.value
                    product[i].YearOfProduction=year.value


                    localStorage.setItem('product',JSON.stringify(product))

                    productManager.showListProduct(product);

                    window.location.href='../html/user.html'

                }else {
                    window.location.href='../html/user.html'
                }

            })


    })
}
}

productManager.search();













