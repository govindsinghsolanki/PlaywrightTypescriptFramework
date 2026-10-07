# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Add New User
- Location: tests\admin.spec.ts:12:6

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('.oxd-input-group').filter({ hasText: 'Password' }).locator('.oxd-input') resolved to 2 elements:
    1) <input type="password" data-v-1f99f73c="" autocomplete="off" class="oxd-input oxd-input--active"/> aka getByRole('textbox').nth(3)
    2) <input type="password" data-v-1f99f73c="" autocomplete="off" class="oxd-input oxd-input--active"/> aka getByRole('textbox').nth(4)

Call log:
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Password' }).locator('.oxd-input')

```

# Page snapshot

```yaml
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
        - generic [ref=f2e162]:
          - generic [ref=f2e164]:
            - generic [ref=f2e165]: User Role*
            - generic [ref=f2e169] [cursor=pointer]:
              - generic [ref=f2e170]: ESS
              - generic [ref=f2e171]: 
          - generic [ref=f2e174]:
            - generic [ref=f2e175]: Employee Name*
            - textbox "Type for hints..." [ref=f2e180]: test
            - generic [ref=f2e181]: Invalid
          - generic [ref=f2e183]:
            - generic [ref=f2e184]: Status*
            - generic [ref=f2e188] [cursor=pointer]:
              - generic [ref=f2e189]: Enabled
              - generic [ref=f2e190]: 
          - generic [ref=f2e193]:
            - generic [ref=f2e194]: Username*
            - textbox [active] [ref=f2e197]: test_Keira53
        - generic [ref=f2e199]:
          - generic [ref=f2e200]:
            - generic [ref=f2e201]:
              - generic [ref=f2e202]: Password*
              - textbox [ref=f2e205]
            - paragraph [ref=f2e206]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f2e208]:
            - generic [ref=f2e209]: Confirm Password*
            - textbox [ref=f2e212]
        - separator [ref=f2e213]
        - generic [ref=f2e214]:
          - paragraph [ref=f2e215]: "* Required"
          - button "Cancel" [ref=f2e216] [cursor=pointer]
          - button "Save" [ref=f2e217] [cursor=pointer]
    - generic [ref=f2e218]:
      - paragraph [ref=f2e219]: OrangeHRM OS 5.9
      - paragraph [ref=f2e220]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e221] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test";
  2  | import{BasePage} from "./BasePage";
  3  | import { AdminData } from "../types/admin.types";
  4  | 
  5  | 
  6  | export class AdminPage extends BasePage{
  7  | 
  8  |     private readonly userManagementHeading:Locator;
  9  |     private readonly usertable:Locator;
  10 | 
  11 |     constructor(page:Page)
  12 |     {
  13 |         super(page);
  14 |         this.userManagementHeading=page.getByRole('heading',{name:'User Management'});
  15 |         this.usertable=page.getByRole('table');
  16 | 
  17 |     }
  18 | 
  19 |     /**
  20 |      * To verify user management page
  21 |      * @returns 
  22 |      */
  23 |     getUserManagementPage():Locator{
  24 |          return this.userManagementHeading;
  25 |     }
  26 | 
  27 |     /**
  28 |      * To verify user table
  29 |      * @returns 
  30 |      */
  31 |     getUserTable():Locator{
  32 |         return this.usertable;
  33 |     }
  34 | 
  35 |     async addAdmin(user:AdminData){
  36 |           await this.clickOnAddButton();
  37 |           await this.selectUserRole(user.role);
  38 |           await this.enterEmployeeName(user.employeeName);
  39 |           await this.selectStatus(user.status);
  40 |           await this.enterUserName(user.username);
  41 |           await this.enterPassword(user.password);
  42 |           await this.enterConfirmPassword(user.confirmPassword);
  43 |     }
  44 | 
  45 |     async selectUserRole(role:string){
  46 |         const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
  47 |         await userRole.locator('.oxd-select-text').click();
  48 |         await this.page.getByRole('option').filter({hasText:`${role}`}).click();
  49 |     }   
  50 | 
  51 |     async enterEmployeeName(employeeName:string){
  52 |         const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
  53 |         await employee.locator('.oxd-autocomplete-text-input').click();
  54 |         await employee.locator('input').fill(employeeName);
  55 |         await this.page.getByRole('option').nth(0).click();
  56 |     }
  57 | 
  58 |     async selectStatus(statusValue:string){
  59 |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  60 |         await status.locator('.oxd-select-text').click();
  61 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  62 |     }
  63 | 
  64 |     async enterUserName(username:string){
  65 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  66 |         await user.locator('.oxd-input').fill(username);
  67 |     }
  68 | 
  69 |     async enterPassword(passwordValue:string){
  70 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Password'});
> 71 |         await password.locator('.oxd-input').fill(passwordValue);
     |                                              ^ Error: locator.fill: Error: strict mode violation: locator('.oxd-input-group').filter({ hasText: 'Password' }).locator('.oxd-input') resolved to 2 elements:
  72 |     }
  73 | 
  74 |     async enterConfirmPassword(confirmPassword:string){
  75 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  76 |         await password.locator('.oxd-input').fill(confirmPassword);
  77 |     }
  78 | 
  79 | }
```