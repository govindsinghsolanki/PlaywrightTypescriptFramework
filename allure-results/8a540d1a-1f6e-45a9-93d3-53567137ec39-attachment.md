# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.ts >> [Login] Verify that the user cannot login with an invalid username
- Location: tests\login-module.spec.ts:18:5

# Error details

```
Error: Please provide secret key whil starting execution
```

# Test source

```ts
  1  | import CryptoJs from "crypto-js";
  2  | 
  3  | export default class CommonUtils{
  4  | 
  5  |     private secretKey:string;
  6  | 
  7  |     
  8  |     /**
  9  |      * Initilizing secretKey
  10 |      */
  11 |     constructor()
  12 |     {
  13 |             // this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY:"";
  14 | 
  15 |             if(process.env.SECRET_KEY){
  16 |                 this.secretKey=process.env.SECRET_KEY;
  17 |             }else{
> 18 |                 throw new Error("Please provide secret key whil starting execution");
     |                       ^ Error: Please provide secret key whil starting execution
  19 |             }
  20 |     }
  21 | 
  22 |     /**
  23 |      * Provide Encrypted Data from string
  24 |      * @param data 
  25 |      * @returns
  26 |      */
  27 |     public encryptData(data:string):string{
  28 |         const encryptData=CryptoJs.AES.encrypt(data,this.secretKey).toString();
  29 |         console.log(encryptData);
  30 |         return encryptData;
  31 |     }
  32 | 
  33 |     /**
  34 |      * Provide Decrypted Data in string format
  35 |      * @param encryptdata 
  36 |      * @returns 
  37 |      */
  38 |     public descryptData(encryptdata:string):string{
  39 |          const decryptData=CryptoJs.AES.decrypt(encryptdata,this.secretKey).toString(CryptoJs.enc.Utf8);           
  40 |          return decryptData;
  41 |     }
  42 | 
  43 | }
```