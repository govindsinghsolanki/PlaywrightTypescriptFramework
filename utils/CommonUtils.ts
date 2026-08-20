import CryptoJs from "crypto-js";

export default class CommonUtils{

    private secretKey:string;

    
    /**
     * Initilizing secretKey
     */
    constructor()
    {
            // this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY:"";

            if(process.env.SECRET_KEY){
                this.secretKey=process.env.SECRET_KEY;
            }else{
                throw new Error("Please provide secret key whil starting execution");
            }
    }

    /**
     * Provide Encrypted Data from string
     * @param data 
     * @returns
     */
    public encryptData(data:string):string{
        const encryptData=CryptoJs.AES.encrypt(data,this.secretKey).toString();
        console.log(encryptData);
        return encryptData;
    }

    /**
     * Provide Decrypted Data in string format
     * @param encryptdata 
     * @returns 
     */
    public descryptData(encryptdata:string):string{
         const decryptData=CryptoJs.AES.decrypt(encryptdata,this.secretKey).toString(CryptoJs.enc.Utf8);           
         return decryptData;
    }

}