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
  - waiting for getByRole('option').filter({ hasText: 'Disabled11' })

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Admin" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Demo Source
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: User Management
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - generic [ref=f4e136]:
              - text: Job
              - generic [ref=f4e137]: 
          - listitem [ref=f4e138] [cursor=pointer]:
            - generic [ref=f4e139]:
              - text: Organization
              - generic [ref=f4e140]: 
          - listitem [ref=f4e141] [cursor=pointer]:
            - generic [ref=f4e142]:
              - text: Qualifications
              - generic [ref=f4e143]: 
          - listitem [ref=f4e144] [cursor=pointer]:
            - link "Nationalities" [ref=f4e145]:
              - /url: "#"
          - listitem [ref=f4e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=f4e147]:
              - /url: "#"
          - listitem [ref=f4e148] [cursor=pointer]:
            - generic [ref=f4e149]:
              - text: Configuration
              - generic [ref=f4e150]: 
          - button "" [ref=f4e152] [cursor=pointer]
  - generic [ref=f4e154]:
    - generic [ref=f4e157]:
      - heading "Edit User" [level=6] [ref=f4e158]
      - separator [ref=f4e159]
      - generic [ref=f4e160]:
        - generic [ref=f4e162]:
          - generic [ref=f4e164]:
            - generic [ref=f4e165]: User Role*
            - generic [ref=f4e169] [cursor=pointer]:
              - generic [ref=f4e170]: ESS
              - generic [ref=f4e171]: 
          - generic [ref=f4e174]:
            - generic [ref=f4e175]: Employee Name*
            - textbox "Type for hints..." [ref=f4e180]: Tim R John
          - generic [ref=f4e182]:
            - generic [ref=f4e183]: Status*
            - generic [ref=f4e186]:
              - generic [ref=f4e187] [cursor=pointer]:
                - generic [active] [ref=f4e188]: Enabled
                - generic [ref=f4e189]: 
              - listbox [ref=f4e191]:
                - option "-- Select --" [ref=f4e192] [cursor=pointer]
                - option "Enabled" [ref=f4e193]
                - option "Disabled" [ref=f4e195] [cursor=pointer]
          - generic [ref=f4e198]:
            - generic [ref=f4e199]: Username*
            - textbox [ref=f4e202]: test_Emelie78
          - generic [ref=f4e204]:
            - generic [ref=f4e205]: Change Password ?
            - generic [ref=f4e209] [cursor=pointer]:
              - checkbox " Yes" [ref=f4e210]
              - generic [ref=f4e211]: 
              - text: "Yes"
        - separator [ref=f4e213]
        - generic [ref=f4e214]:
          - paragraph [ref=f4e215]: "* Required"
          - button "Cancel" [ref=f4e216] [cursor=pointer]
          - button "Save" [ref=f4e217] [cursor=pointer]
    - generic [ref=f4e218]:
      - paragraph [ref=f4e219]: OrangeHRM OS 5.9
      - paragraph [ref=f4e220]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e221] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  110 |         await options.click();
  111 |     }
  112 | 
  113 |     async selectStatus(statusValue:string){
  114 |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  115 |         await status.locator('.oxd-select-text').click();
> 116 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
      |                                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
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