export class Cart
{
    public book_id? : string
    public book_name : string;
    public auth_name : string;
    public book_count : number;
    public book_image : string;
    public book_price : number;
    public book_total : number;


    constructor(product_id:string,product_name:string,auth_name:string,product_count:number,product_image:string,product_price:number,product_total:number)
    {

        this.book_id = product_id;
        this.book_name = product_name;
        this.book_count = product_count;
        this.book_price = product_price;
        this.book_image = product_image;
        this.book_total = product_total;
        this.auth_name = auth_name;
       

    }
   
}