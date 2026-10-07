# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global.setup.ts >> Global Setup for Auto Login
- Location: tests\global.setup.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "登录" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: 用户名
            - textbox "用户名" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: 密码
            - textbox "密码" [active] [ref=e30]: admin123
          - button "登录" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: 忘了密码?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
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
  26 |            await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
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
> 38 |           await this.loginButton.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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