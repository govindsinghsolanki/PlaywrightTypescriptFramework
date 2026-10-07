# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Add New User
- Location: tests\admin.spec.ts:12:6

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('oxd-input-group').filter({ hasText: 'Employee Name' }).getByPlaceholder('Type for hints...')

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
  52 |         const employee=this.page.locator('oxd-input-group').filter({hasText:'Employee Name'});
> 53 |         await employee.getByPlaceholder('Type for hints...').click();
     |                                                              ^ Error: locator.click: Target page, context or browser has been closed
  54 |         console.log("Employee Name: "+employeeName);
  55 |         await employee.getByPlaceholder('Type for hints...').fill(employeeName);
  56 |         await this.page.getByRole('option').nth(0).click();
  57 |     }
  58 | 
  59 |     async selectStatus(statusValue:string){
  60 |         const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
  61 |         await status.locator('.oxd-select-text').click();
  62 |         await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
  63 |     }
  64 | 
  65 |     async enterUserName(username:string){
  66 |         const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
  67 |         await user.locator('.oxd-input').fill(username);
  68 |     }
  69 | 
  70 |     async enterPassword(passwordValue:string){
  71 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Password'});
  72 |         await password.locator('input').fill(passwordValue);
  73 |     }
  74 | 
  75 |     async enterConfirmPassword(confirmPassword:string){
  76 |         const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
  77 |         await password.locator('input').fill(confirmPassword);
  78 |     }
  79 | 
  80 | }
```