# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text-input')
Expected: "Disabled1"
Received: "Disabled"

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text-input')
    3 × locator resolved to <div tabindex="0" data-v-67d2aedf="" class="oxd-select-text-input">-- Select --</div>
      - unexpected value "-- Select --"
    6 × locator resolved to <div tabindex="0" data-v-67d2aedf="" class="oxd-select-text-input">Disabled</div>
      - unexpected value "Disabled"
  - Test timeout of 30000ms exceeded.

```

```yaml
- text: Disabled
```

# Test source

```ts
  1  | import{test,expect} from "../fixtures/hooks-fixture.ts";
  2  | import adminData from "../test-data/admin-module-data.json";
  3  | import { createUserName} from "../factories/admin.factory.ts";              
  4  | import { AdminData } from "../types/admin.types.ts";
  5  | 
  6  | test("Verify Open User Management",async({adminPage,leftNavigationPage,gotoUrl})=>{
  7  |     await leftNavigationPage.openAdminModule();
  8  |     await expect(adminPage.getUserManagementPage()).toBeVisible();
  9  |     await expect(adminPage.getUserTable()).toBeVisible();
  10 | })
  11 | 
  12 | test("Add New User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  13 | 
  14 |     const user:AdminData={
  15 |         /**
  16 |          * ...(spread operator is used to copy the contents of object or array into another object or array)
  17 |          */
  18 |         ...adminData.userManagement.addUser,
  19 |          username:createUserName()
  20 |     }
  21 |     await leftNavigationPage.openAdminModule();
  22 |     await adminPage.addAdmin(user);
  23 |     await adminPage.searchNewCreatedUser(user);
  24 |     await expect(adminPage.verifyNewUserCreatedSuccessfully(user)).toBeVisible();
  25 | 
  26 | /*  await leftNavigationPage.openAdminModule();
  27 |     await adminPage.clickOnAddButton();
  28 |     await adminPage.selectUserRole(adminData.userManagement.addUser.role);
  29 |     await adminPage.enterEmployeeName(adminData.userManagement.addUser.employeeName);
  30 |     await adminPage.selectStatus(adminData.userManagement.addUser.status);
  31 |     const adminUserData=createAdminUser();
  32 |     // await adminPage.enterUserName(adminUserData);
  33 |     await adminPage.enterPassword(adminData.userManagement.addUser.password);
  34 |     await adminPage.enterConfirmPassword(adminData.userManagement.addUser.confirmPassword);
  35 |     await adminPage.clickOnSaveButton();
  36 |  */    
  37 | })
  38 | 
  39 | test.only("Edit User",async({page,adminPage,leftNavigationPage,gotoUrl})=>{
  40 |   const user:AdminData={
  41 |         ...adminData.userManagement.addUser,
  42 |          username:createUserName()
  43 |     } 
  44 |     await leftNavigationPage.openAdminModule();
  45 |     await adminPage.addAdmin(user);
  46 |     await adminPage.searchNewCreatedUser(user);
  47 |     await adminPage.editUser(adminData.userManagement.editUser.status,user.username);
  48 |     await adminPage.searchNewCreatedUser(user);
  49 |     
  50 |     // await adminPage.verifyUserUpdatedDetails(user.username);
  51 |     // const status= await (await adminPage.verifyUserUpdatedDetails(user.username)).textContent();
  52 |     // console.log("status is :"+status?.trim());
  53 |     // expect(status).toBe(adminData.userManagement.editUser.status);
  54 | 
  55 |     // expect(await adminPage.verifyUserUpdatedDetails(user.username)).toBeVisible(adminData.userManagement.editUser.status);
> 56 |    await expect(await adminPage.verifyUserUpdatedDetails(user.username)).toHaveText('Disabled1');
     |                                                                          ^ Error: expect(locator).toHaveText(expected) failed
  57 | 
  58 | })
```