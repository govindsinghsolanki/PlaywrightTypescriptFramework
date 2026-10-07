# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Disabled"
Received: []
```

# Page snapshot

```yaml
- generic [ref=f6e3]:
  - generic:
    - complementary [ref=f6e4]:
      - navigation "Sidepanel" [ref=f6e5]:
        - generic [ref=f6e6]:
          - link [ref=f6e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f6e9]
          - text: 
        - generic [ref=f6e10]:
          - generic [ref=f6e11]:
            - generic [ref=f6e12]:
              - textbox "Search" [ref=f6e15]
              - button "" [ref=f6e16] [cursor=pointer]
            - separator [ref=f6e18]
          - list [ref=f6e19]:
            - listitem [ref=f6e20]:
              - link "Admin" [ref=f6e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f6e25]:
              - link "PIM" [ref=f6e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f6e41]:
              - link "Leave" [ref=f6e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f6e46]:
              - link "Time" [ref=f6e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f6e54]:
              - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f6e62]:
              - link "My Info" [ref=f6e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f6e70]:
              - link "Performance" [ref=f6e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f6e80]:
              - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f6e85]:
              - link "Directory" [ref=f6e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f6e90]:
              - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f6e96]:
              - link "Claim" [ref=f6e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f6e105]:
              - link "Buzz" [ref=f6e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f6e110]:
      - generic [ref=f6e111]:
        - generic [ref=f6e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f6e114]
        - link [ref=f6e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f6e117] [cursor=pointer]
        - list [ref=f6e123]:
          - listitem [ref=f6e124]:
            - generic [ref=f6e125] [cursor=pointer]:
              - img "profile picture" [ref=f6e126]
              - paragraph [ref=f6e127]: SrJDWXrVlL Rosario
              - generic [ref=f6e128]: 
      - navigation "Topbar Menu" [ref=f6e130]:
        - list [ref=f6e131]:
          - listitem [ref=f6e132] [cursor=pointer]:
            - generic [ref=f6e133]:
              - text: User Management
              - generic [ref=f6e134]: 
          - listitem [ref=f6e135] [cursor=pointer]:
            - generic [ref=f6e136]:
              - text: Job
              - generic [ref=f6e137]: 
          - listitem [ref=f6e138] [cursor=pointer]:
            - generic [ref=f6e139]:
              - text: Organization
              - generic [ref=f6e140]: 
          - listitem [ref=f6e141] [cursor=pointer]:
            - generic [ref=f6e142]:
              - text: Qualifications
              - generic [ref=f6e143]: 
          - listitem [ref=f6e144] [cursor=pointer]:
            - link "Nationalities" [ref=f6e145]:
              - /url: "#"
          - listitem [ref=f6e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f6e147]:
              - /url: "#"
          - listitem [ref=f6e148] [cursor=pointer]:
            - generic [ref=f6e149]:
              - text: Configuration
              - generic [ref=f6e150]: 
          - button "" [ref=f6e152] [cursor=pointer]
  - generic [ref=f6e154]:
    - generic [ref=f6e157]:
      - heading "Edit User" [level=6] [ref=f6e158]
      - separator [ref=f6e159]
      - generic [ref=f6e160]:
        - generic [ref=f6e162]:
          - generic [ref=f6e164]:
            - generic [ref=f6e165]: User Role*
            - generic [ref=f6e169] [cursor=pointer]:
              - generic [ref=f6e170]: ESS
              - generic [ref=f6e171]: 
          - generic [ref=f6e174]:
            - generic [ref=f6e175]: Employee Name*
            - textbox "Type for hints..." [ref=f6e180]: Test Employee1790935587858
          - generic [ref=f6e182]:
            - generic [ref=f6e183]: Status*
            - generic [ref=f6e187] [cursor=pointer]:
              - generic [ref=f6e188]: Disabled
              - generic [ref=f6e189]: 
          - generic [ref=f6e192]:
            - generic [ref=f6e193]: Username*
            - textbox [ref=f6e196]: test_Burdette90
          - generic [ref=f6e198]:
            - generic [ref=f6e199]: Change Password ?
            - generic [ref=f6e203] [cursor=pointer]:
              - checkbox " Yes" [ref=f6e204]
              - generic [ref=f6e205]: 
              - text: "Yes"
        - separator [ref=f6e207]
        - generic [ref=f6e208]:
          - paragraph [ref=f6e209]: "* Required"
          - button "Cancel" [ref=f6e210] [cursor=pointer]
          - button "Save" [ref=f6e211] [cursor=pointer]
    - generic [ref=f6e212]:
      - paragraph [ref=f6e213]: OrangeHRM OS 5.9
      - paragraph [ref=f6e214]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f6e215] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  49 |     const status= await adminPage.verifyUserUpdatedDetails(user.username);
  50 |     // await page.pause();
  51 |     console.log("status is :"+status);
> 52 |     expect(status).toBe(adminData.userManagement.editUser.status);
     |                    ^ Error: expect(received).toBe(expected) // Object.is equality
  53 | 
  54 | })
```