# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-002 - Search Employee
- Location: tests\create-employee.spec.ts:12:6

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.oxd-topbar-body-nav li').filter({ hasText: 'Employee List' })
    - locator resolved to <li data-v-5327b38a="" class="oxd-topbar-body-nav-tab">…</li>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1  | import{Locator,Page} from "@playwright/test"
  2  | import{EmployeeData} from "../types/EmployeeData";
  3  | import{BasePage} from "./BasePage";
  4  | 
  5  | export class EmployeePage extends BasePage{
  6  |         // private readonly page:Page;
  7  |         private readonly addPimButton:Locator;
  8  |         private readonly firstNameTextBox:Locator;
  9  |         private readonly middleNameTextBox:Locator;
  10 |         private readonly lastNameTextBox:Locator;
  11 |         private readonly employeeIdTextBox:Locator;
  12 |         private readonly newEmployeeNameHeading:Locator;
  13 |         private readonly employeeListTab:Locator;
  14 |         private readonly employeeTable:Locator;
  15 |         private readonly saveButton:Locator;
  16 |     
  17 |         constructor(page:Page){
  18 |             super(page);
  19 |             // this.page=page;
  20 |             this.addPimButton=page.getByRole('button',{name:'Add'});
  21 |             this.firstNameTextBox=page.getByRole('textbox',{name:'First Name'});
  22 |             this.middleNameTextBox=page.getByRole('textbox',{name:'Middle Name'});
  23 |             this.lastNameTextBox=page.getByRole('textbox',{name:'Last Name'});
  24 |             this.employeeIdTextBox=page.locator('.oxd-input-group').filter({hasText:'Employee Id'}).locator('input');
  25 |             this.employeeListTab=page.locator('.oxd-topbar-body-nav li').filter({hasText:'Employee List'});
  26 |             this.saveButton=page.getByRole('button',{name:'Save'});
  27 |             this.newEmployeeNameHeading=page.locator('.orangehrm-edit-employee-name');
  28 | 
  29 |             this.employeeTable= page.getByRole('table');
  30 |         }
  31 |     
  32 |     
  33 |         /**
  34 |          * To add new employee
  35 |          * @param firstName 
  36 |          * @param middleName 
  37 |          * @param lastName 
  38 |          */
  39 |          async addEmployee(employee:EmployeeData):Promise<void>{
  40 |             await this.addPimButton.click();
  41 |             await this.firstNameTextBox.fill(employee.firstName);
  42 |             await this.middleNameTextBox.fill(employee.middleName);
  43 |             await this.lastNameTextBox.fill(employee.lastName);
  44 |             await this.employeeIdTextBox.fill(employee.employeeId);
  45 |             await this.saveButton.click();
  46 |         }
  47 |     
  48 |          newAddedEmployeeName():Locator{
  49 |             return this.newEmployeeNameHeading;
  50 |         }
  51 |         
  52 |         async searchEmployee(empId:string){ 
> 53 |             await this.employeeListTab.click();
     |                                        ^ Error: locator.click: Target page, context or browser has been closed
  54 |             await this.employeeIdTextBox.fill(empId);
  55 |             await this.clickOnSearch();
  56 |         }
  57 | 
  58 |  /*        async isEmployeePresent(empName:string):Promise<boolean>{
  59 |            console.log("Emp name is: "+empName); 
  60 |            return await this.employeeTable.getByRole('rowgroup').filter({has:this.page.locator('.oxd-table-body')})
  61 |            .getByRole('cell').filter({hasText:empName}).isVisible();
  62 |         } */
  63 | 
  64 |       async isEmployeePresent(empName:string):Promise<boolean>{
  65 |            console.log("Emp name is:: "+empName); 
  66 |         //    this.page.waitForTimeout(10000);
  67 |        await this.page.pause();
  68 |          return await this.employeeTable
  69 |             .locator('.oxd-table-body')
  70 |             .getByRole('cell')
  71 |             .filter({ hasText: empName })
  72 |             .isVisible();
  73 |         }
  74 | 
  75 |     }
  76 | 
```