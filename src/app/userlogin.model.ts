export class Userlogin {
    public email : string;
    public name : string;
    public _id : string;
    public address : string;


constructor(p_email:string,p_id:string,p_name:string,p_address:string)
    {

        this.email = p_email;
        this.name = p_name;
        this._id = p_id;
        this.address = p_address;

    }


  
    // constructor(
    //   public email: string,
    //   public _id: string,
    // public name: string 
    // ) {}
  
  }
  