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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').filter({ hasText: 'test' }).first()

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
              - paragraph [ref=f2e127]: hello shaik
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
            - generic [ref=f2e178]:
              - textbox "Type for hints..." [active] [ref=f2e180]: test
              - listbox [ref=f2e181]:
                - option "No Records Found" [ref=f2e182] [cursor=pointer]
          - generic [ref=f2e184]:
            - generic [ref=f2e185]: Status*
            - generic [ref=f2e189] [cursor=pointer]:
              - generic [ref=f2e190]: "-- Select --"
              - generic [ref=f2e191]: 
          - generic [ref=f2e194]:
            - generic [ref=f2e195]: Username*
            - textbox [ref=f2e198]
        - generic [ref=f2e200]:
          - generic [ref=f2e201]:
            - generic [ref=f2e202]:
              - generic [ref=f2e203]: Password*
              - textbox [ref=f2e206]
            - paragraph [ref=f2e207]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=f2e209]:
            - generic [ref=f2e210]: Confirm Password*
            - textbox [ref=f2e213]
        - separator [ref=f2e214]
        - generic [ref=f2e215]:
          - paragraph [ref=f2e216]: "* Required"
          - button "Cancel" [ref=f2e217] [cursor=pointer]
          - button "Save" [ref=f2e218] [cursor=pointer]
    - generic [ref=f2e219]:
      - paragraph [ref=f2e220]: OrangeHRM OS 5.9
      - paragraph [ref=f2e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  52  |            await this.page.getByRole('heading',{name:'System Users'}).waitFor({timeout:50000});
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
  71  |     async editUser(status:string, username:string){
  72  |         await this.clickOnEditButton(username);
  73  |         await this.selectStatus(status);
  74  |         await this.clickOnSaveButton();
  75  |     }
  76  | 
  77  |     async verifyUserUpdatedDetails(username:string):Promise<Locator>{
  78  |         await this.clickOnEditButton(username);   
  79  |         const statusDropdown = this.page.locator('.oxd-input-group')
  80  |                                .filter({ hasText: 'Status' })
  81  |                                .locator('.oxd-select-text-input');
  82  |         return statusDropdown;
  83  |         // await statusDropdown.waitFor({state:'visible'});
  84  |         
  85  |         // // Get the actual DOM element
  86  |         // const statusHandle = await statusDropdown.elementHandle();
  87  | 
  88  |         // if (!statusHandle) {
  89  |         //     throw new Error('Status dropdown element was not found');
  90  |         // }
  91  |         //  await this.page.waitForFunction(
  92  |         //     (el) => el.textContent?.trim() !== '-- Select --', //(first part is condition)
  93  |         //         statusHandle //(statusHandle is argument)
  94  |         // );
  95  |         // const status = await statusDropdown.textContent();
  96  |         // return status?.trim() ?? '';   
  97  | 
  98  |     }
  99  | 
  100 |     async selectUserRole(role:string){
  101 |         const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
  102 |         await userRole.locator('.oxd-select-text').click();
  103 |         await this.page.getByRole('option').filter({hasText:`${role}`}).click();
  104 |     }   
  105 | 
  106 |     async enterEmployeeName(employeeName:string){
  107 |         const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
  108 |         await employee.locator('input').fill(employeeName);        
  109 |         const options = this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').filter({ hasText: employeeName }).first();
> 110 |         await options.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  111 |     }
  112 | 
  113 |     async selectStatus(statusValue:string){
  114 |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  115 |         await status.locator('.oxd-select-text').click();
  116 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  117 |     }
  118 | 
  119 |     async enterUserName(username:string){
  120 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  121 |         await user.locator('.oxd-input').fill(username,{timeout:30000});
  122 |     }
  123 | 
  124 |     async enterPassword(passwordValue:string){
  125 |         const password=this.page.locator('.oxd-input-group').filter({hasText:/^Password$/});
  126 |         await password.locator('.oxd-input').fill(passwordValue);
  127 |     }
  128 | 
  129 |     async enterConfirmPassword(confirmPassword:string){
  130 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  131 |         await password.locator('.oxd-input').fill(confirmPassword);
  132 |     }
  133 | 
  134 | }
```