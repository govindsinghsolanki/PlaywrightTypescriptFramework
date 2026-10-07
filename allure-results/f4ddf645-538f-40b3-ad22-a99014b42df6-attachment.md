# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for getByRole('heading', { name: 'System Users' }) to be visible
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - generic [ref=f3e113]:
            - heading "Admin" [level=6] [ref=f3e114]
            - heading "/ User Management" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: manda user
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: User Management
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Job
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Organization
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Qualifications
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Nationalities" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f3e148]:
              - /url: "#"
          - listitem [ref=f3e149] [cursor=pointer]:
            - generic [ref=f3e150]:
              - text: Configuration
              - generic [ref=f3e151]: 
          - button "" [ref=f3e153] [cursor=pointer]
  - generic [ref=f3e155]:
    - generic [ref=f3e157]:
      - generic [ref=f3e158]:
        - generic [ref=f3e159]:
          - heading "System Users" [level=5] [ref=f3e161]
          - button "" [ref=f3e164] [cursor=pointer]
        - separator [ref=f3e166]
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - generic [ref=f3e172]:
              - generic [ref=f3e173]: Username
              - textbox [ref=f3e176]
            - generic [ref=f3e178]:
              - generic [ref=f3e179]: User Role
              - generic [ref=f3e183] [cursor=pointer]:
                - generic [ref=f3e184]: "-- Select --"
                - generic [ref=f3e185]: 
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Name
              - textbox "Type for hints..." [ref=f3e194]
            - generic [ref=f3e196]:
              - generic [ref=f3e197]: Status
              - generic [ref=f3e201] [cursor=pointer]:
                - generic [ref=f3e202]: "-- Select --"
                - generic [ref=f3e203]: 
          - separator [ref=f3e205]
          - generic [ref=f3e206]:
            - button "Reset" [ref=f3e207] [cursor=pointer]
            - button "Search" [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - table [ref=f3e214]
    - generic [ref=f3e219]:
      - paragraph [ref=f3e220]: OrangeHRM OS 5.9
      - paragraph [ref=f3e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
> 52  |            await this.page.getByRole('heading',{name:'System Users'}).waitFor({timeout:5000});
      |                                                                       ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
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