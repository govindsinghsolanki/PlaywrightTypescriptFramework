# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Add New User
- Location: tests\admin.spec.ts:12:6

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('.oxd-autocomplete-option').filter({ hasText: 'test' }) resolved to 5 elements:
    1) <div role="option" data-v-da59eaf4="" data-v-390abb6d="" class="oxd-autocomplete-option">…</div> aka getByRole('option', { name: 'AutoTest Employee' }).first()
    2) <div role="option" data-v-da59eaf4="" data-v-390abb6d="" class="oxd-autocomplete-option">…</div> aka getByRole('option', { name: 'AutoTest Employee' }).nth(1)
    3) <div role="option" data-v-da59eaf4="" data-v-390abb6d="" class="oxd-autocomplete-option">…</div> aka getByRole('option', { name: 'AutoTest Employee' }).nth(2)
    4) <div role="option" data-v-da59eaf4="" data-v-390abb6d="" class="oxd-autocomplete-option">…</div> aka getByRole('option', { name: 'AutoTest Employee' }).nth(3)
    5) <div role="option" data-v-da59eaf4="" data-v-390abb6d="" class="oxd-autocomplete-option">…</div> aka getByRole('option', { name: 'AutoTest Employee' }).nth(4)

Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'test' }) to be visible

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
              - link "Time" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e49]:
              - link "Recruitment" [ref=f2e50] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e57]:
              - link "My Info" [ref=f2e58] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e65]:
              - link "Performance" [ref=f2e66] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e75]:
              - link "Dashboard" [ref=f2e76] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e80]:
              - link "Directory" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e85]:
              - link "Maintenance" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e91]:
              - link "Claim" [ref=f2e92] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e100]:
              - link "Buzz" [ref=f2e101] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e105]:
      - generic [ref=f2e106]:
        - generic [ref=f2e107]:
          - text: 
          - heading "Admin" [level=6] [ref=f2e109]
        - link [ref=f2e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e112] [cursor=pointer]
        - list [ref=f2e118]:
          - listitem [ref=f2e119]:
            - generic [ref=f2e120] [cursor=pointer]:
              - img "profile picture" [ref=f2e121]
              - paragraph [ref=f2e122]: Emma Brown
              - generic [ref=f2e123]: 
      - navigation "Topbar Menu" [ref=f2e125]:
        - list [ref=f2e126]:
          - listitem [ref=f2e127] [cursor=pointer]:
            - generic [ref=f2e128]:
              - text: User Management
              - generic [ref=f2e129]: 
          - listitem [ref=f2e130] [cursor=pointer]:
            - generic [ref=f2e131]:
              - text: Job
              - generic [ref=f2e132]: 
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: Organization
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Qualifications
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - link "Nationalities" [ref=f2e140]:
              - /url: "#"
          - listitem [ref=f2e141] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e142]:
              - /url: "#"
          - listitem [ref=f2e143] [cursor=pointer]:
            - generic [ref=f2e144]:
              - text: Configuration
              - generic [ref=f2e145]: 
          - button "" [ref=f2e147] [cursor=pointer]
  - generic [ref=f2e149]:
    - generic [ref=f2e152]:
      - heading "Add User" [level=6] [ref=f2e153]
      - separator [ref=f2e154]
      - generic [ref=f2e155]:
        - generic [ref=f2e157]:
          - generic [ref=f2e159]:
            - generic [ref=f2e160]: User Role*
            - generic [ref=f2e164] [cursor=pointer]:
              - generic [ref=f2e165]: ESS
              - generic [ref=f2e166]: 
          - generic [ref=f2e169]:
            - generic [ref=f2e170]: Employee Name*
            - generic [ref=f2e173]:
              - textbox "Type for hints..." [active] [ref=f2e175]: test
              - listbox [ref=f2e176]:
                - option "AutoTest Employee" [ref=f2e177] [cursor=pointer]
                - option "AutoTest Employee" [ref=f2e179] [cursor=pointer]
                - option "AutoTest Employee" [ref=f2e181] [cursor=pointer]
                - option "AutoTest Employee" [ref=f2e183] [cursor=pointer]
                - option "AutoTest Employee" [ref=f2e185] [cursor=pointer]
          - generic [ref=f2e188]:
            - generic [ref=f2e189]: Status*
            - generic [ref=f2e193] [cursor=pointer]:
              - generic [ref=f2e194]: "-- Select --"
              - generic [ref=f2e195]: 
          - generic [ref=f2e198]:
            - generic [ref=f2e199]: Username*
            - textbox [ref=f2e202]
        - generic [ref=f2e204]:
          - generic [ref=f2e205]:
            - generic [ref=f2e206]:
              - generic [ref=f2e207]: Password
              - textbox [ref=f2e210]
            - paragraph [ref=f2e211]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f2e213]:
            - generic [ref=f2e214]: Confirm Password
            - textbox [ref=f2e217]
        - separator [ref=f2e218]
        - generic [ref=f2e219]:
          - paragraph [ref=f2e220]: "* Required"
          - button "Cancel" [ref=f2e221] [cursor=pointer]
          - button "Save" [ref=f2e222] [cursor=pointer]
    - generic [ref=f2e223]:
      - paragraph [ref=f2e224]: OrangeHRM OS 5.9
      - paragraph [ref=f2e225]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e226] [cursor=pointer]:
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
  43 |           await this.clickOnSaveButton();
  44 |           await this.page.pause();
  45 |     }
  46 | 
  47 |     async selectUserRole(role:string){
  48 |         const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
  49 |         await userRole.locator('.oxd-select-text').click();
  50 |         await this.page.getByRole('option').filter({hasText:`${role}`}).click();
  51 |     }   
  52 | 
  53 |     async enterEmployeeName(employeeName:string){
  54 |         const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
  55 |         await employee.locator('.oxd-autocomplete-text-input').click();
  56 |         await employee.locator('input').fill(employeeName);
  57 |         
  58 |         const options = this.page.locator('.oxd-autocomplete-option').filter({ hasText: employeeName })
  59 |         console.log(await options.count());
  60 |         
  61 |                     //    .filter({ hasText: employeeName }).first();
  62 | 
> 63 |         await options.waitFor();
     |                       ^ Error: locator.waitFor: Error: strict mode violation: locator('.oxd-autocomplete-option').filter({ hasText: 'test' }) resolved to 5 elements:
  64 |         await options.click();
  65 | 
  66 |         // await this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').first().waitFor();
  67 |         // const options= this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option');
  68 |         // await option.click();
  69 |         // await option.waitFor({state:'visible', timeout:5000});
  70 |         // await options.first().click();
  71 |         // await this.page.pause();
  72 |     }
  73 | 
  74 |     async selectStatus(statusValue:string){
  75 |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  76 |         await status.locator('.oxd-select-text').click();
  77 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  78 |     }
  79 | 
  80 |     async enterUserName(username:string){
  81 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  82 |         await user.locator('.oxd-input').fill(username);
  83 |     }
  84 | 
  85 |     async enterPassword(passwordValue:string){
  86 |         const password=this.page.locator('.oxd-input-group').filter({hasText:/^Password$/});
  87 |         await password.locator('.oxd-input').fill(passwordValue);
  88 |     }
  89 | 
  90 |     async enterConfirmPassword(confirmPassword:string){
  91 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  92 |         await password.locator('.oxd-input').fill(confirmPassword);
  93 |     }
  94 | 
  95 | }
```