# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Edit User
- Location: tests\admin.spec.ts:39:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.oxd-icon-button .bi-pencil-fill') resolved to 26 elements:
    1) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)
    2) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    3) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(3) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    4) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(4) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    5) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(5) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    6) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(6) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    7) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(7) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    8) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(8) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    9) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(9) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    10) <i data-v-bddebfba="" data-v-f5c763eb="" class="oxd-icon bi-pencil-fill"></i> aka locator('div:nth-child(10) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)')
    ...

Call log:
  - waiting for locator('.oxd-icon-button .bi-pencil-fill')

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - generic [ref=f3e113]:
            - heading "Admin" [level=6] [ref=f3e114]
            - heading "/ User Management" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: manda user
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: User Management
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Job
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Organization
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Qualifications
              - generic [ref=f3e144]: 
          - listitem [ref=f3e145] [cursor=pointer]:
            - link "Nationalities" [ref=f3e146]:
              - /url: "#"
          - listitem [ref=f3e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f3e148]:
              - /url: "#"
          - listitem [ref=f3e149] [cursor=pointer]:
            - generic [ref=f3e150]:
              - text: Configuration
              - generic [ref=f3e151]: 
          - button "" [ref=f3e153] [cursor=pointer]
  - generic [ref=f3e155]:
    - generic [ref=f3e157]:
      - generic [ref=f3e158]:
        - generic [ref=f3e159]:
          - heading "System Users" [level=5] [ref=f3e161]
          - button "" [ref=f3e164] [cursor=pointer]
        - separator [ref=f3e166]
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - generic [ref=f3e172]:
              - generic [ref=f3e173]: Username
              - textbox [ref=f3e176]: test_Emmalee.Lubowitz
            - generic [ref=f3e178]:
              - generic [ref=f3e179]: User Role
              - generic [ref=f3e183] [cursor=pointer]:
                - generic [ref=f3e184]: "-- Select --"
                - generic [ref=f3e185]: 
            - generic [ref=f3e188]:
              - generic [ref=f3e189]: Employee Name
              - textbox "Type for hints..." [ref=f3e194]
            - generic [ref=f3e196]:
              - generic [ref=f3e197]: Status
              - generic [ref=f3e201] [cursor=pointer]:
                - generic [ref=f3e202]: "-- Select --"
                - generic [ref=f3e203]: 
          - separator [ref=f3e205]
          - generic [ref=f3e206]:
            - button "Reset" [ref=f3e207] [cursor=pointer]
            - button "Search" [active] [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - generic [ref=f3e213]:
          - separator [ref=f3e214]
          - generic [ref=f3e215]: (1) Record Found
        - table [ref=f3e218]:
          - rowgroup [ref=f3e219]:
            - row [ref=f3e220]:
              - columnheader "" [ref=f3e221]:
                - generic [ref=f3e223] [cursor=pointer]:
                  - checkbox "" [ref=f3e224]
                  - generic [ref=f3e225]: 
              - columnheader "Username " [ref=f3e227]:
                - text: Username
                - generic [ref=f3e228]:
                  - generic [ref=f3e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f3e230]:
                - text: User Role
                - generic [ref=f3e231]:
                  - generic [ref=f3e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f3e233]:
                - text: Employee Name
                - generic [ref=f3e234]:
                  - generic [ref=f3e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f3e236]:
                - text: Status
                - generic [ref=f3e237]:
                  - generic [ref=f3e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e239]
          - rowgroup [ref=f3e240]:
            - row [ref=f3e242]:
              - cell "" [ref=f3e243]:
                - generic [ref=f3e246] [cursor=pointer]:
                  - checkbox "" [ref=f3e247]
                  - generic [ref=f3e248]: 
              - cell "test_Emmalee.Lubowitz" [ref=f3e250]
              - cell "ESS" [ref=f3e252]
              - cell "AITestFirst AITestLast" [ref=f3e254]
              - cell "Enabled" [ref=f3e256]
              - cell [ref=f3e258]:
                - generic [ref=f3e259]:
                  - button "" [ref=f3e260] [cursor=pointer]
                  - button "" [ref=f3e262] [cursor=pointer]
    - generic [ref=f3e265]:
      - paragraph [ref=f3e266]: OrangeHRM OS 5.9
      - paragraph [ref=f3e267]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e268] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  9  |     protected readonly editButton:Locator;
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page=page;
  13 |         this.searchButton=page.getByRole('button',{name:' Search '});
  14 |         this.addButton=page.getByRole('button',{name:'Add'});
  15 |         this.saveButton=page.getByRole('button',{name:'Save'});
  16 |         this.editButton=page.locator(".oxd-icon-button .bi-pencil-fill");
  17 |     }
  18 | 
  19 |     protected async clickOnSearch(){
  20 |        await this.searchButton.click();   
  21 |     }
  22 | 
  23 |     protected async takeScreenshot(name: string) {
  24 |     await this.page.screenshot({ path: `screenshots/${name}.png` });
  25 | }
  26 | 
  27 |     protected async goBack() {
  28 |           await this.page.goBack();
  29 | }
  30 | 
  31 |     protected async waitForPageLoad() {
  32 |            await this.page.waitForLoadState("networkidle");
  33 | }
  34 | 
  35 |     protected async clickOnSaveButton(){
  36 |            await this.saveButton.click();   
  37 | }
  38 |     
  39 |     protected async clickOnAddButton(){
  40 |            await this.addButton.click();   
  41 | }
  42 |     protected async clickOnSearchButton(){
  43 |             await this.saveButton.click();
  44 |     }
  45 |     
  46 |     protected async clickOnEditButton(){
> 47 |             await this.editButton.click();
     |                                   ^ Error: locator.click: Error: strict mode violation: locator('.oxd-icon-button .bi-pencil-fill') resolved to 26 elements:
  48 |     }
  49 | 
  50 | 
  51 | }
```