# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login-module.spec.ts >> [Login] Verify that the user can log in with valid username and password
- Location: tests\login-module.spec.ts:28:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import{Page,Locator} from "@playwright/test";
  2  | import { BasePage } from "./BasePage";
  3  | 
  4  | export class LoginPage extends BasePage{
  5  | 
  6  |     // private readonly page:Page;
  7  |     private readonly userNameInput:Locator;
  8  |     private readonly passwordInput:Locator;
  9  |     private readonly loginButton:Locator;
  10 |     private readonly invalidCredentialsErrorPopup:Locator;
  11 | 
  12 |     constructor(page:Page){
  13 |         super(page);
  14 |         // this.page=page;
  15 |         this.userNameInput=page.locator('input[name="username"]');
  16 |         this.passwordInput=page.locator('input[name="password"]');
  17 |         this.loginButton=page.getByRole("button",{name:'Login'});
  18 |         this.invalidCredentialsErrorPopup=page.getByRole("alert");
  19 |     }
  20 | 
  21 | 
  22 |     /**
  23 |      * To open URL into browser
  24 |      */
  25 |     async gotoOrangeHrm(){
> 26 |            await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
     |                            ^ Error: page.goto: Target page, context or browser has been closed
  27 |         }
  28 | 
  29 |         
  30 |     /**
  31 |      * To Login into OrangeHRM application
  32 |      * @param userName 
  33 |      * @param password  
  34 |      */    
  35 |     async loginOrangeHrm(userName:string,password:string){
  36 |           await this.userNameInput.fill(userName);
  37 |           await this.passwordInput.fill(password);
  38 |           await this.loginButton.click();
  39 |     }
  40 | 
  41 |     /**
  42 |      * To get invalid credential error message
  43 |      * @returns 
  44 |      */ 
  45 |     public getInvalidCredentialsErrorMessage():Locator{
  46 |             return this.invalidCredentialsErrorPopup;
  47 |     }
  48 | 
  49 | }
  50 | 
```