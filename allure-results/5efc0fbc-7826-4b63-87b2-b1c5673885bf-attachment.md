# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Delete User
- Location: tests\admin.spec.ts:41:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByText('test_Cole86', { exact: true })
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for getByText('test_Cole86', { exact: true })
    13 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - generic [ref=f5e113]:
            - heading "Admin" [level=6] [ref=f5e114]
            - heading "/ User Management" [level=6] [ref=f5e115]
        - link [ref=f5e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e118] [cursor=pointer]
        - list [ref=f5e124]:
          - listitem [ref=f5e125]:
            - generic [ref=f5e126] [cursor=pointer]:
              - img "profile picture" [ref=f5e127]
              - paragraph [ref=f5e128]: Test 30 user
              - generic [ref=f5e129]: 
      - navigation "Topbar Menu" [ref=f5e131]:
        - list [ref=f5e132]:
          - listitem [ref=f5e133] [cursor=pointer]:
            - generic [ref=f5e134]:
              - text: User Management
              - generic [ref=f5e135]: 
          - listitem [ref=f5e136] [cursor=pointer]:
            - generic [ref=f5e137]:
              - text: Job
              - generic [ref=f5e138]: 
          - listitem [ref=f5e139] [cursor=pointer]:
            - generic [ref=f5e140]:
              - text: Organization
              - generic [ref=f5e141]: 
          - listitem [ref=f5e142] [cursor=pointer]:
            - generic [ref=f5e143]:
              - text: Qualifications
              - generic [ref=f5e144]: 
          - listitem [ref=f5e145] [cursor=pointer]:
            - link "Nationalities" [ref=f5e146]:
              - /url: "#"
          - listitem [ref=f5e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f5e148]:
              - /url: "#"
          - listitem [ref=f5e149] [cursor=pointer]:
            - generic [ref=f5e150]:
              - text: Configuration
              - generic [ref=f5e151]: 
          - button "" [ref=f5e153] [cursor=pointer]
  - generic [ref=f5e155]:
    - generic [ref=f5e157]:
      - generic [ref=f5e158]:
        - generic [ref=f5e159]:
          - heading "System Users" [level=5] [ref=f5e161]
          - button "" [ref=f5e164] [cursor=pointer]
        - separator [ref=f5e166]
        - generic [ref=f5e168]:
          - generic [ref=f5e170]:
            - generic [ref=f5e172]:
              - generic [ref=f5e173]: Username
              - textbox [ref=f5e176]: test_Cole86
            - generic [ref=f5e178]:
              - generic [ref=f5e179]: User Role
              - generic [ref=f5e183] [cursor=pointer]:
                - generic [ref=f5e184]: "-- Select --"
                - generic [ref=f5e185]: 
            - generic [ref=f5e188]:
              - generic [ref=f5e189]: Employee Name
              - textbox "Type for hints..." [ref=f5e194]
            - generic [ref=f5e196]:
              - generic [ref=f5e197]: Status
              - generic [ref=f5e201] [cursor=pointer]:
                - generic [ref=f5e202]: "-- Select --"
                - generic [ref=f5e203]: 
          - separator [ref=f5e205]
          - generic [ref=f5e206]:
            - button "Reset" [ref=f5e207] [cursor=pointer]
            - button "Search" [ref=f5e208] [cursor=pointer]
      - generic [ref=f5e209]:
        - button " Add" [ref=f5e211] [cursor=pointer]:
          - generic [ref=f5e212]: 
          - text: Add
        - generic [ref=f5e213]:
          - separator [ref=f5e214]
          - generic [ref=f5e215]: No Records Found
        - table [ref=f5e218]:
          - rowgroup [ref=f5e219]:
            - row [ref=f5e220]:
              - columnheader "" [ref=f5e221]:
                - generic [ref=f5e223] [cursor=pointer]:
                  - checkbox "" [ref=f5e224]
                  - generic [ref=f5e225]: 
              - columnheader "Username " [ref=f5e227]:
                - text: Username
                - generic [ref=f5e228]:
                  - generic [ref=f5e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f5e230]:
                - text: User Role
                - generic [ref=f5e231]:
                  - generic [ref=f5e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f5e233]:
                - text: Employee Name
                - generic [ref=f5e234]:
                  - generic [ref=f5e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f5e236]:
                - text: Status
                - generic [ref=f5e237]:
                  - generic [ref=f5e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e239]
          - rowgroup
    - generic [ref=f5e241]:
      - paragraph [ref=f5e242]: OrangeHRM OS 5.9
      - paragraph [ref=f5e243]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e244] [cursor=pointer]:
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
  25 | })
  26 | 
  27 | test("Edit User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  28 |   const user:AdminData={
  29 |         ...adminData.userManagement.addUser,
  30 |          username:createUserName()
  31 |     } 
  32 |     await leftNavigationPage.openAdminModule();
  33 |     await adminPage.addAdmin(user);
  34 |     await adminPage.searchNewCreatedUser(user);
  35 |     await adminPage.editUser(adminData.userManagement.editUser.status,user.username);
  36 |     await adminPage.searchNewCreatedUser(user);
  37 |     const status=await adminPage.verifyUserUpdatedDetails(user.username);
  38 |     await expect(status).toHaveText(adminData.userManagement.editUser.status);
  39 | })  
  40 | 
  41 | test.only("Delete User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  42 |     const user:AdminData={
  43 |         ...adminData.userManagement.addUser,
  44 |         username:createUserName()
  45 |     }
  46 |     await leftNavigationPage.openAdminModule();
  47 |     await adminPage.addAdmin(user);
  48 |     await adminPage.searchNewCreatedUser(user);
  49 |     await adminPage.deleteUser(user.username);
> 50 |     await expect(adminPage.getUser(user.username)).toHaveCount(1);
     |                                                    ^ Error: expect(locator).toHaveCount(expected) failed
  51 | 
  52 | })
```