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
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: "Dashboard"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })
  - Test timeout of 30000ms exceeded.

```

# Test source

```ts
  1  | import {test} from "../fixtures/common-fixture";
  2  | import { expect } from "@playwright/test";
  3  | 
  4  | 
  5  | // If we want storage state/authenticate session or want to avoid repetivie login session.
  6  | test("Global Setup for Auto Login",async({page,loginPage,dashboardPage,credentialProvider})=>{
  7  |      await loginPage.gotoOrangeHrm();
  8  |      await loginPage.loginOrangeHrm(credentialProvider.getUsername(),credentialProvider.getPassword());
  9  |      await page.waitForURL(process.env.BASE_URL+"/web/index.php/dashboard/index");
  10 |      //OR//
  11 |     //  await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
> 12 |      await expect(dashboardPage.getDashboardHeading()).toHaveText("Dashboard");
     |                                                        ^ Error: expect(locator).toHaveText(expected) failed
  13 |      await page.context().storageState({path:"./playwright/.auth/auth.json"})
  14 | 
  15 | })
```