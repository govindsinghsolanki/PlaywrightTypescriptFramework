# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Add New User
- Location: tests\admin.spec.ts:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add' })

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
  17 |     protected async clickOnSearch()
  18 |     {
  19 |        await this.searchButton.click();   
  20 |     }
  21 | 
  22 |     protected async takeScreenshot(name: string) {
  23 |     await this.page.screenshot({ path: `screenshots/${name}.png` });
  24 | }
  25 | 
  26 |     protected async goBack() {
  27 |     await this.page.goBack();
  28 | }
  29 | 
  30 |     protected async waitForPageLoad() {
  31 |     await this.page.waitForLoadState("networkidle");
  32 | }
  33 | 
  34 |      async clickOnSaveButton(){
  35 |      await this.saveButton.click();   
  36 | }
  37 |     
  38 |      async clickOnAddButton(){
> 39 |      await this.addButton.click();   
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  40 | }
  41 | 
  42 | 
  43 | }
```