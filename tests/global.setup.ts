import {test} from "../fixtures/common-fixture";
import { expect } from "@playwright/test";


// If we want storage state/authenticate session or want to avoid repetivie login session.
test("Global Setup for Auto Login",async({page,loginPage,dashboardPage,credentialProvider})=>{
     await loginPage.gotoOrangeHrm();
     await loginPage.loginOrangeHrm(credentialProvider.getUsername(),credentialProvider.getPassword());
     await page.waitForURL(process.env.BASE_URL+"/web/index.php/dashboard/index");
     //OR//
    //  await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
     await expect(dashboardPage.getDashboardHeading()).toHaveText("Dashboard");
     await page.context().storageState({path:"./playwright/.auth/auth.json"})

})