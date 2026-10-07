# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-003 - Delete employee
- Location: tests\create-employee.spec.ts:24:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Save' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-304890b0="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-v-d5bfe35b="" class="oxd-form-loader">…</div> intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: auto_manda_99960 user
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - listitem [ref=f2e132] [cursor=pointer]:
            - generic [ref=f2e133]:
              - text: Configuration
              - generic [ref=f2e134]: 
          - listitem [ref=f2e135] [cursor=pointer]:
            - link "Employee List" [ref=f2e136]:
              - /url: "#"
          - listitem [ref=f2e137] [cursor=pointer]:
            - link "Add Employee" [ref=f2e138]:
              - /url: "#"
          - listitem [ref=f2e139] [cursor=pointer]:
            - link "Reports" [ref=f2e140]:
              - /url: "#"
          - button "" [ref=f2e142] [cursor=pointer]
  - generic [ref=f2e144]:
    - generic [ref=f2e147]:
      - heading "Add Employee" [level=6] [ref=f2e148]
      - separator [ref=f2e149]
      - generic [ref=f2e150]:
        - generic [ref=f2e154]:
          - generic [ref=f2e155]:
            - generic [ref=f2e157]:
              - button "Choose File"
              - generic [ref=f2e158]:
                - img "profile picture" [ref=f2e160]
                - button "" [ref=f2e161] [cursor=pointer]
            - paragraph [ref=f2e163]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f2e164]:
            - generic [ref=f2e165]:
              - generic [ref=f2e168]:
                - generic [ref=f2e169]: Employee Full Name*
                - generic [ref=f2e171]:
                  - textbox "First Name" [ref=f2e174]: Pinkie
                  - textbox "Middle Name" [ref=f2e177]: Jo
                  - textbox "Last Name" [ref=f2e180]: Wilkinson
              - generic [ref=f2e183]:
                - generic [ref=f2e184]: Employee Id
                - textbox [active] [ref=f2e187]: Emp6734
            - separator [ref=f2e188]
            - generic [ref=f2e189]:
              - paragraph [ref=f2e190]: Create Login Details
              - checkbox [ref=f2e193]
        - separator [ref=f2e195]
        - generic [ref=f2e196]:
          - paragraph [ref=f2e197]: "* Required"
          - button "Cancel" [ref=f2e198] [cursor=pointer]
          - button "Save" [ref=f2e199] [cursor=pointer]
    - generic [ref=f2e200]:
      - paragraph [ref=f2e201]: OrangeHRM OS 5.9
      - paragraph [ref=f2e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e203] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  28 |             this.employeeTable= page.getByRole('table');
  29 |         }
  30 |     
  31 |     
  32 |         /**
  33 |          * To add new employee
  34 |          * @param firstName 
  35 |          * @param middleName 
  36 |          * @param lastName 
  37 |          */
  38 |          async addEmployee(employee:EmployeeData):Promise<void>{
  39 |             await this.addPimButton.click();
  40 |             await this.firstNameTextBox.fill(employee.firstName);
  41 |             await this.middleNameTextBox.fill(employee.middleName);
  42 |             await this.lastNameTextBox.fill(employee.lastName);
  43 |             await this.employeeIdTextBox.fill(employee.employeeId);
> 44 |             await this.saveButton.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  45 |         }
  46 |     
  47 |          verifyNewAddedEmployeeName():Locator{
  48 |             return this.newEmployeeNameHeading;
  49 |         }
  50 |         
  51 |         async searchEmployee(empId:string){ 
  52 |             await this.employeeListTab.click();
  53 |             await this.employeeIdTextBox.fill(empId);
  54 |             await this.clickOnSearch();
  55 |         }
  56 |        verifyEmployeeInTable(empName: string):Locator {
  57 |             return this.employeeTable.locator('.oxd-table-body').getByRole('cell').filter({ hasText: empName });
  58 |       }
  59 | 
  60 |         async deleteEmployee(empId:string){
  61 |             const employeeRow=this.employeeTable.locator('.oxd-table-body .oxd-table-row').filter({hasText:empId});
  62 |             await employeeRow.locator('i.bi-trash').click();
  63 |             this.page.pause();
  64 |         }
  65 | 
  66 |     }
  67 | 
```