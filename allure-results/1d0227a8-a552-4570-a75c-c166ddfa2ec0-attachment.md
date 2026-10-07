# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text .oxd-select-text-input')

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
  50  |      */
  51  |     async searchNewCreatedUser(user:AdminData){
  52  |            await this.enterUserName(user.username);
  53  |            await this.clickOnSearch();
  54  |     }
  55  | 
  56  |     /**
  57  |      * @param
  58  |      * @returns 
  59  |      */
  60  |     verifyNewUserCreatedSuccessfully(user:AdminData):Locator{
  61  |        return this.page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell')
  62  |         .filter({hasText:`${user.username}`}); 
  63  |     }
  64  | 
  65  |     /**
  66  |      * Edit User
  67  |      * @param username 
  68  |      * @param status 
  69  |      */
  70  |     async editUser(status:string, username?:string){
  71  |         // const userRow=this.page.locator('.oxd-table-body .oxd-table-row')
  72  |         // .filter({hasText:`${username}`});
  73  |         // await userRow.locator(".oxd-icon-button").click();
  74  |         await this.clickOnEditButton();
  75  |         await this.selectStatus(status);
  76  |         await this.clickOnSaveButton();
  77  |     }
  78  | 
  79  |     async verifyUserUpdatedDetails():Promise<String>{
  80  |         await this.clickOnEditButton();   
  81  |         const status=this.page.locator('oxd-input-group').filter({hasText:'Status'});   
> 82  |         return status.locator('.oxd-select-text .oxd-select-text-input').innerText();
      |                                                                          ^ Error: locator.innerText: Target page, context or browser has been closed
  83  |     }
  84  | 
  85  |     async selectUserRole(role:string){
  86  |         const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
  87  |         await userRole.locator('.oxd-select-text').click();
  88  |         await this.page.getByRole('option').filter({hasText:`${role}`}).click();
  89  |     }   
  90  | 
  91  |     async enterEmployeeName(employeeName:string){
  92  |         const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
  93  |         await employee.locator('input').fill(employeeName);        
  94  |         const options = this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').filter({ hasText: employeeName }).first();
  95  |         await options.click();
  96  |     }
  97  | 
  98  |     async selectStatus(statusValue:string){
  99  |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  100 |         await status.locator('.oxd-select-text').click();
  101 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  102 |     }
  103 | 
  104 |     async enterUserName(username:string){
  105 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  106 |         await user.locator('.oxd-input').fill(username);
  107 |     }
  108 | 
  109 |     async enterPassword(passwordValue:string){
  110 |         const password=this.page.locator('.oxd-input-group').filter({hasText:/^Password$/});
  111 |         await password.locator('.oxd-input').fill(passwordValue);
  112 |     }
  113 | 
  114 |     async enterConfirmPassword(confirmPassword:string){
  115 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  116 |         await password.locator('.oxd-input').fill(confirmPassword);
  117 |     }
  118 | 
  119 | }
```