import {test as baseTest} from "../fixtures/pom-fixture";
import CommonUtils from "../utils/CommonUtils";
import { ICredentialProvider } from "../utils/ICredentialProvider.interface";
import {EnvironmentCredentialProvider} from "../utils/EnvironmentCredentialProvider";

type CommonFixture={
    commonUtils:CommonUtils;
    credentialProvider: ICredentialProvider;
}

export const test =baseTest.extend<CommonFixture>({
    commonUtils:async({},use)=>{
        const commonUtils=new CommonUtils();
        await use(commonUtils);
    },
    credentialProvider:async({commonUtils},use)=>{
        const provider:ICredentialProvider=new EnvironmentCredentialProvider(commonUtils);
        await use(provider);
    }
      
})