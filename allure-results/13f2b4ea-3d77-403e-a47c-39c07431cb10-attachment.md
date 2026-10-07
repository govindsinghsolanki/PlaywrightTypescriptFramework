# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Delete User
- Location: tests\admin.spec.ts:41:6

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-toast--info')
Expected: "Info No Records Found"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.oxd-toast--info')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Test 26 user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (25) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin Test 26 user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Test 26 user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " amelia.brown.1791303095421 ESS '123!@#' '123!@#' Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "amelia.brown.1791303095421"
      - cell "ESS"
      - cell "'123!@#' '123!@#'"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavya Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavya"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavya1791303993588 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavya1791303993588"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavya1791304069135 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavya1791304069135"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavya1791304167320 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavya1791304167320"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavya1791304333854 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavya1791304333854"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " bhavyag1791304405715 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "bhavyag1791304405715"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " cristhian ESS yedghjb1 90jsnd Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "cristhian"
      - cell "ESS"
      - cell "yedghjb1 90jsnd"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " disposable.user.1791303126452 Admin A8DCo 010Z Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "disposable.user.1791303126452"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " hetmeyer Admin Thomas Benny Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "hetmeyer"
      - cell "Admin"
      - cell "Thomas Benny"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " LeJack Admin Le Oui Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "LeJack"
      - cell "Admin"
      - cell "Le Oui"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Sagar Admin Sagar hgfkag Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sagar"
      - cell "Admin"
      - cell "Sagar hgfkag"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test.emp02 ESS boy gitl Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test.emp02"
      - cell "ESS"
      - cell "boy gitl"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TestUser_Yogesh01 ESS Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TestUser_Yogesh01"
      - cell "ESS"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TILAM Admin Timothy Amiano Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TILAM"
      - cell "Admin"
      - cell "Timothy Amiano"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TILAM Admin Timothy Amiano Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TILAM"
      - cell "Admin"
      - cell "Timothy Amiano"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TILAM1 Admin Timothy Amiano Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TILAM1"
      - cell "Admin"
      - cell "Timothy Amiano"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user628281 ESS TimeF6282 TimeL6282 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user628281"
      - cell "ESS"
      - cell "TimeF6282 TimeL6282"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user629822 ESS TimeF6298 TimeL6298 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user629822"
      - cell "ESS"
      - cell "TimeF6298 TimeL6298"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " wowok ESS James Butler Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "wowok"
      - cell "ESS"
      - cell "James Butler"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " __Chandel__3 ESS Sourabh Sharma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "__Chandel__3"
      - cell "ESS"
      - cell "Sourabh Sharma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
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
  50 |     
> 51 |     await expect(adminPage.expectUserIsDeleted()).toHaveText('Info No Records Found');
     |                                                   ^ Error: expect(locator).toHaveText(expected) failed
  52 | })
```