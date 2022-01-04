import {Genre} from './genre.model';
export class Book
{
    public _id? : string
    public name : string;
    public description : string;
    public authers : string;
    public productImagePath : string;
    public price : number;
    public stock : number;
    public genre :[Genre]

    constructor(p_name:string,p_desc:string,auther:string,p_imagePath:string,p_price:number)
    {

        this.name = p_name;
        this.description = p_desc;
        this.productImagePath = p_imagePath;
        this.price = p_price;
        this.authers = auther;
        

    }
}