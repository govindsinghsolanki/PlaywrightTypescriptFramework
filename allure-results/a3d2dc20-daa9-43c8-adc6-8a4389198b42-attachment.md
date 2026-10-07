# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-001 - Create employee
- Location: tests\create-employee.spec.ts:7:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Add' })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test";
  2  | 
  3  | export class BasePage{
  4  |  
  5  |     protected readonly page:Page;
  6  |     protected readonly searchButton:Locator;
  7  |     protected readonly addButton:Locator;
  8  |     protected readonly saveButton:Locator;
  9  | 
  10 |     constructor(page:Page){
  11 |         this.page=page;
  12 |         this.searchButton=page.getByRole('button',{name:' Search '});
  13 |         this.addButton=page.getByRole('button',{name:'Add'});
  14 |         this.saveButton=page.getByRole('button',{name:'Save'});
  15 |     }
  16 | 
  17 |     protected async clickOnSearch(){
  18 |        await this.searchButton.click();   
  19 |     }
  20 | 
  21 |     protected async takeScreenshot(name: string) {
  22 |     await this.page.screenshot({ path: `screenshots/${name}.png` });
  23 | }
  24 | 
  25 |     protected async goBack() {
  26 |           await this.page.goBack();
  27 | }
  28 | 
  29 |     protected async waitForPageLoad() {
  30 |            await this.page.waitForLoadState("networkidle");
  31 | }
  32 | 
  33 |     protected async clickOnSaveButton(){
  34 |            await this.saveButton.click();   
  35 | }
  36 |     
  37 |     protected async clickOnAddButton(){
> 38 |            await this.addButton.click();   
     |                                 ^ Error: locator.click: Test ended.
  39 | }
  40 |     
  41 |     protected async clickOnEditButton(username:string){
  42 |        const userRow= this.page.locator('.oxd-table-row')
  43 |         .filter({hasText:username});
  44 |         await userRow.locator('.oxd-icon-button')
  45 |         .filter({has:this.page.locator('.bi-pencil-fill')}).click();
  46 |     }
  47 | 
  48 |     protected async delete(username:string){
  49 |             const userRow=this.page.locator('.oxd-table-row').filter({hasText:username});
  50 |             await userRow.locator('.oxd-icon-button')
  51 |             .filter({has:this.page.locator('.bi-trash')}).click();
  52 |     }
  53 | 
  54 |     protected async confirmDeletion(){
  55 |          await this.page.getByRole('button',{name:'Yes, Delete'}).click();
  56 |     }
  57 |     
  58 | }
```