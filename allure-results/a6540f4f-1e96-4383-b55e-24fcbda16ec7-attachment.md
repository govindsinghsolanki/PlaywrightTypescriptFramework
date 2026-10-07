# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('heading', { name: 'System Users' }) to be visible

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
> 52  |            await this.page.getByRole('heading',{name:'System Users'}).waitFor({timeout:50000});
      |                                                                       ^ Error: locator.waitFor: Target page, context or browser has been closed
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