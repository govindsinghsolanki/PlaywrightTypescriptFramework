import {test} from "../fixtures/hooks-fixture";
import { expect } from "@playwright/test";

/* test.beforeEach("Before Each",async({loginPage})=>{
          await loginPage.gotoOrangeHrm();
})

test.afterEach("After Each",async({userPage})=>{
          await userPage.logout();
}) */

test("Temp test 1",async({page,gotoUrl})=>{

     console.log(await page.title())
}) 

test("Temp test 2",async({page,gotoUrl})=>{
          await expect(page).toHaveTitle('OrangeHRM');
})

test("Temp test 3",async({page,gotoUrl,logout})=>{
          await expect(page).toHaveTitle('OrangeHRM');
})