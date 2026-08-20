import {test,expect} from "../fixtures/hooks-fixture";
import loginModuleData from "../test-data/login-module-data.json";


// If we don't want storage state/authenticate session or if we don't want to execute global setup file

// To remove Authentication state
test.use({storageState:{
    cookies:[],
    origins:[]
}})

test("[Login] Verify that the user cannot login with an invalid password",{tag:['@Smoke','@Sanity','@InvalidPassword']},async({loginPage,credentialProvider,gotoUrl})=>{
    // const username= commonUtils.descryptData(process.env.USER_NAME!);
    await loginPage.loginOrangeHrm(credentialProvider.getUsername(),loginModuleData.wrong_password);
    await expect(loginPage.getInvalidCredentialsErrorMessage()).toHaveText(loginModuleData.invalid_credentials_text);   
})

test("[Login] Verify that the user cannot login with an invalid username",{tag:['@Smoke','@Sanity','@InvalidUsername']},async({loginPage,credentialProvider,gotoUrl})=>{
    // const password=commonUtils.descryptData(credentialProvider.getPassword());
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username,credentialProvider.getPassword());
    await expect(loginPage.getInvalidCredentialsErrorMessage()).toHaveText(loginModuleData.invalid_credentials_text);   
})

test("[Login] Verify that the user cannot login with an invalid username and password",{tag:['@Sanity','@Regression','@InvalidUserNamePassword']},async({loginPage,gotoUrl})=>{
    await loginPage.loginOrangeHrm(loginModuleData.wrong_username,loginModuleData.wrong_password);
    await expect(loginPage.getInvalidCredentialsErrorMessage()).toHaveText(loginModuleData.invalid_credentials_text);   
})

test("[Login] Verify that the user can log in with valid username and password",{tag:'@VISUAL'},async({gotoUrl,loginPage,credentialProvider,leftNavigationPage})=>{ 
    // await loginPage.loginOrangeHrm(commonUtils.descryptData(process.env.USER_NAME!),commonUtils.descryptData(process.env.PASSWORD!));
    await loginPage.loginOrangeHrm(credentialProvider.getUsername(),credentialProvider.getPassword());
    await expect(leftNavigationPage.orangeHrmLogoVisible()).toHaveScreenshot("OrangeHRMBrandLogo.png");
    await expect(leftNavigationPage.leftNavigationPanelVisible()).toHaveScreenshot("LeftNavigationPanel.png");
})