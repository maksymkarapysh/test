export class Product {
    public _id: string;
    public name: string;
    public price: number;
    public productImage: any;

    constructor(name, price, productImage) {
        this.name = name;
        this.price = price;
        this.productImage = productImage;
    }
}