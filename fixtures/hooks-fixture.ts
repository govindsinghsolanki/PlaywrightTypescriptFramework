import{test as baseTest} from "../fixtures/common-fixture";

type HooksFixture ={
    gotoUrl:void;
    logout:void;
}

export const test=baseTest.extend<HooksFixture>({

    // Before each hook
    gotoUrl:async({loginPage},use)=>{
        await loginPage.gotoOrangeHrm();
        await use();
    },
    
    // After each hook
    logout:async({userPage},use)=>{
        await use();
        await userPage.logout();
    }
})

export {expect} from "@playwright/test";