 export class Product {

     NameProduct:string;
     Number:number;
     Company:string;
     ExpirationDate:string;
     YearOfProduction:string;


    constructor(NameProduct: string, Number:number,Company: string,ExpirationDate: string,  YearOfProduction: string) {

        this.NameProduct = NameProduct;
        this.Number=Number;
        this.Company = Company;
        this.ExpirationDate = ExpirationDate;
        this.YearOfProduction = YearOfProduction;
    }
}
export default {Product}