

let product = JSON.parse(localStorage.getItem('product'));


function allProduct(product) {
    let countAllProduct = 0;
    for (let i = 0; i < product.length; i++) {
        countAllProduct++
    }
    return countAllProduct;
}

let countAll = allProduct(product)


let addAllProduct = <HTMLElement>document.getElementById('all-product')
addAllProduct.innerHTML = countAll.toString();


function smaller100(){
    let countProductSmaller100=0;
    for(let value of product){
        if(value.Number <100){
            countProductSmaller100++;
        }
    }
    return countProductSmaller100;
}

let productSmaller100=smaller100()

let addProductSmaller100 = <HTMLElement>document.getElementById('smaller100')
addProductSmaller100.innerHTML = productSmaller100.toString();




