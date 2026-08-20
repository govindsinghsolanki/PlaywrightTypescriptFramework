import { ICredentialProvider } from "./ICredentialProvider.interface";
import  CommonUtils from "./CommonUtils.ts";

export class EnvironmentCredentialProvider implements ICredentialProvider{

   private readonly commonUtils:CommonUtils;

    constructor(commonUtils:CommonUtils){
            this.commonUtils=commonUtils;
    }

    getUsername(): string {
            return this.commonUtils.descryptData(process.env.USER_NAME!);
    }

    getPassword():string{
             return this.commonUtils.descryptData(process.env.PASSWORD!);
    }

}