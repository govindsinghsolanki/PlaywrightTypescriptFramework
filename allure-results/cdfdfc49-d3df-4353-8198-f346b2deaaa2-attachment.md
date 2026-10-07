# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-003 - Delete employee
- Location: tests\create-employee.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded while setting up "employee".
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'PIM' })

```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test";
  2  | 
  3  | 
  4  | export class LeftNavigationPage{
  5  | 
  6  |     private readonly page:Page;
  7  |     private readonly pimLink:Locator;
  8  |     private readonly orangeHrmLogo:Locator;
  9  |     private readonly leftNavigationPanel:Locator;
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page=page;
  13 |         this.pimLink= page.getByRole('link',{name:'PIM'});
  14 |         this.orangeHrmLogo=page.getByAltText("client brand banner");
  15 |         this.leftNavigationPanel=page.getByRole('navigation').locator('.oxd-sidepanel-body');
  16 |     }
  17 | 
  18 |     /**
  19 |      * To Open Pim Module
  20 |      */
  21 |     public async openPimModule(){
  22 |         await this.pimLink.click();
  23 |     }
  24 |     public orangeHrmLogoVisible():Locator{
> 25 |         return this.orangeHrmLogo;
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 |     }
  27 |     public leftNavigationPanelVisible():Locator{
  28 |            return this.leftNavigationPanel;
  29 |     }
  30 | }
```