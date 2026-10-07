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
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'System Users' }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic:
      - complementary [ref=f2e4]:
        - navigation "Sidepanel" [ref=f2e5]:
          - generic [ref=f2e6]:
            - link [ref=f2e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f2e9]
            - text: 
          - generic [ref=f2e10]:
            - generic [ref=f2e11]:
              - generic [ref=f2e12]:
                - textbox "Search" [ref=f2e15]
                - button "" [ref=f2e16] [cursor=pointer]
              - separator [ref=f2e18]
            - list [ref=f2e19]:
              - listitem [ref=f2e20]:
                - link "Admin" [ref=f2e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f2e25]:
                - link "PIM" [ref=f2e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f2e41]:
                - link "Leave" [ref=f2e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f2e46]:
                - link "Time" [ref=f2e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f2e54]:
                - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f2e62]:
                - link "My Info" [ref=f2e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f2e70]:
                - link "Performance" [ref=f2e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f2e80]:
                - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f2e85]:
                - link "Directory" [ref=f2e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f2e90]:
                - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f2e96]:
                - link "Claim" [ref=f2e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f2e105]:
                - link "Buzz" [ref=f2e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f2e110]:
        - generic [ref=f2e111]:
          - generic [ref=f2e112]:
            - text: 
            - heading "Admin" [level=6] [ref=f2e114]
          - link [ref=f2e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f2e117] [cursor=pointer]
          - list [ref=f2e123]:
            - listitem [ref=f2e124]:
              - generic [ref=f2e125] [cursor=pointer]:
                - img "profile picture" [ref=f2e126]
                - paragraph [ref=f2e127]: manda user
                - generic [ref=f2e128]: 
        - navigation "Topbar Menu" [ref=f2e130]:
          - list [ref=f2e131]:
            - listitem [ref=f2e132] [cursor=pointer]:
              - generic [ref=f2e133]:
                - text: User Management
                - generic [ref=f2e134]: 
            - listitem [ref=f2e135] [cursor=pointer]:
              - generic [ref=f2e136]:
                - text: Job
                - generic [ref=f2e137]: 
            - listitem [ref=f2e138] [cursor=pointer]:
              - generic [ref=f2e139]:
                - text: Organization
                - generic [ref=f2e140]: 
            - listitem [ref=f2e141] [cursor=pointer]:
              - generic [ref=f2e142]:
                - text: Qualifications
                - generic [ref=f2e143]: 
            - listitem [ref=f2e144] [cursor=pointer]:
              - link "Nationalities" [ref=f2e145]:
                - /url: "#"
            - listitem [ref=f2e146] [cursor=pointer]:
              - link "Corporate Branding" [ref=f2e147]:
                - /url: "#"
            - listitem [ref=f2e148] [cursor=pointer]:
              - generic [ref=f2e149]:
                - text: Configuration
                - generic [ref=f2e150]: 
            - button "" [ref=f2e152] [cursor=pointer]
    - generic [ref=f2e154]:
      - generic [ref=f2e157]:
        - heading "Add User" [level=6] [ref=f2e158]
        - separator [ref=f2e159]
        - generic [ref=f2e160]:
          - generic [ref=f2e165]:
            - generic [ref=f2e167]:
              - generic [ref=f2e168]: User Role*
              - generic [ref=f2e172] [cursor=pointer]:
                - generic [ref=f2e173]: ESS
                - generic [ref=f2e174]: 
            - generic [ref=f2e177]:
              - generic [ref=f2e178]: Employee Name*
              - textbox "Type for hints..." [ref=f2e183]: AITestFirst AITestMid AITestLast
            - generic [ref=f2e185]:
              - generic [ref=f2e186]: Status*
              - generic [ref=f2e190] [cursor=pointer]:
                - generic [ref=f2e191]: Enabled
                - generic [ref=f2e192]: 
            - generic [ref=f2e195]:
              - generic [ref=f2e196]: Username*
              - textbox [ref=f2e199]: test_Darnell.Bednar
          - generic [ref=f2e201]:
            - generic [ref=f2e202]:
              - generic [ref=f2e203]: Better
              - generic [ref=f2e204]:
                - generic [ref=f2e205]: Password*
                - textbox [ref=f2e208]: Test@1234
              - paragraph [ref=f2e209]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
            - generic [ref=f2e211]:
              - generic [ref=f2e212]: Confirm Password*
              - textbox [ref=f2e215]: Test@1234
          - separator [ref=f2e216]
          - generic [ref=f2e217]:
            - paragraph [ref=f2e218]: "* Required"
            - button "Cancel" [ref=f2e219] [cursor=pointer]
            - button "Save" [active] [ref=f2e220] [cursor=pointer]
      - generic [ref=f2e221]:
        - paragraph [ref=f2e222]: OrangeHRM OS 5.9
        - paragraph [ref=f2e223]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f2e224] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f2e226] [cursor=pointer]:
    - generic [ref=f2e227]:
      - generic [ref=f2e228]: 
      - generic [ref=f2e231]:
        - paragraph [ref=f2e232]: Success
        - paragraph [ref=f2e233]: Successfully Saved
    - button "×" [ref=f2e235]
```

# Test source

```ts
  1   | import{Page,Locator} from "@playwright/test";
  2   | import{BasePage} from "./BasePage";
  3   | import { AdminData } from "../types/admin.types";
  4   | 
  5   | 
  6   | export class AdminPage extends BasePage{
  7   | 
  8   |     private readonly userManagementHeading:Locator;
  9   |     private readonly usertable:Locator;
  10  | 
  11  |     constructor(page:Page){
  12  |         super(page);
  13  |         this.userManagementHeading=page.getByRole('heading',{name:'User Management'});
  14  |         this.usertable=page.getByRole('table');
  15  |     }
  16  | 
  17  |     /**
  18  |      * To verify user management page
  19  |      * @returns 
  20  |      */
  21  |     getUserManagementPage():Locator{
  22  |          return this.userManagementHeading;
  23  |     }
  24  | 
  25  |     /**
  26  |      * To verify user table
  27  |      * @returns 
  28  |      */
  29  |     getUserTable():Locator{
  30  |         return this.usertable;
  31  |     }
  32  |     /**
  33  |      * Add Admin
  34  |      * @param 
  35  |      */
  36  |     async addAdmin(user:AdminData){
  37  |           await this.clickOnAddButton();
  38  |           await this.selectUserRole(user.role);
  39  |           await this.enterEmployeeName(user.employeeName);
  40  |           await this.selectStatus(user.status);
  41  |           await this.enterUserName(user.username);
  42  |           await this.enterPassword(user.password);
  43  |           await this.enterConfirmPassword(user.confirmPassword);
  44  |           await this.clickOnSaveButton();
  45  |     }
  46  | 
  47  |     /**
  48  |      * Search New Created User
  49  |      * @param
  50  |     */
  51  |     async searchNewCreatedUser(user:AdminData){
> 52  |            await this.page.getByRole('heading',{name:'System Users'}).waitFor({timeout:30000});
      |                                                                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  53  |            await this.enterUserName(user.username);
  54  |            await this.clickOnSearch();
  55  |     }
  56  | 
  57  |     /**
  58  |      * @param
  59  |      * @returns 
  60  |      */
  61  |     verifyNewUserCreatedSuccessfully(user:AdminData):Locator{
  62  |        return this.page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell')
  63  |         .filter({hasText:`${user.username}`}); 
  64  |     }
  65  | 
  66  |     /**
  67  |      * Edit User
  68  |      * @param username 
  69  |      * @param status 
  70  |      */
  71  |     async editUser(status:string, username?:string){
  72  |         await this.clickOnEditButton();
  73  |         await this.selectStatus(status);
  74  |         await this.clickOnSaveButton();
  75  |     }
  76  | 
  77  |     async verifyUserUpdatedDetails():Promise<String>{
  78  |         await this.clickOnEditButton();   
  79  |         const status=this.page.locator('.oxd-input-group').filter({hasText:'Status'});   
  80  |         return status.locator('.oxd-select-text-input').innerText();
  81  |     }
  82  | 
  83  |     async selectUserRole(role:string){
  84  |         const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
  85  |         await userRole.locator('.oxd-select-text').click();
  86  |         await this.page.getByRole('option').filter({hasText:`${role}`}).click();
  87  |     }   
  88  | 
  89  |     async enterEmployeeName(employeeName:string){
  90  |         const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
  91  |         await employee.locator('input').fill(employeeName);        
  92  |         const options = this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').filter({ hasText: employeeName }).first();
  93  |         await options.click();
  94  |     }
  95  | 
  96  |     async selectStatus(statusValue:string){
  97  |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  98  |         await status.locator('.oxd-select-text').click();
  99  |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  100 |     }
  101 | 
  102 |     async enterUserName(username:string){
  103 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  104 |         await user.locator('.oxd-input').fill(username,{timeout:30000});
  105 |     }
  106 | 
  107 |     async enterPassword(passwordValue:string){
  108 |         const password=this.page.locator('.oxd-input-group').filter({hasText:/^Password$/});
  109 |         await password.locator('.oxd-input').fill(passwordValue);
  110 |     }
  111 | 
  112 |     async enterConfirmPassword(confirmPassword:string){
  113 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  114 |         await password.locator('.oxd-input').fill(confirmPassword);
  115 |     }
  116 | 
  117 | }
```