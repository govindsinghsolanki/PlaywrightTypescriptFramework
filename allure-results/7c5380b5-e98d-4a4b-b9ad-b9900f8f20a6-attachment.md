# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-003 - Delete employee
- Location: tests\create-employee.spec.ts:24:6

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('table').locator('.oxd-table-body').getByRole('cell').locator('button').filter({ has: locator('i.bi-trash') }) resolved to 49 elements:
    1) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)
    2) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(2) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    3) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(3) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    4) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(4) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    5) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(5) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    6) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(6) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    7) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(7) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    8) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(8) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    9) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(9) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    10) <button type="button" data-v-f5c763eb="" data-v-c423d1fa="" class="oxd-icon-button oxd-table-cell-action-space">…</button> aka locator('div:nth-child(10) > .oxd-table-row > div:nth-child(9) > .oxd-table-cell-actions > button:nth-child(2)')
    ...

Call log:
  - waiting for getByRole('table').locator('.oxd-table-body').getByRole('cell').locator('button').filter({ has: locator('i.bi-trash') })

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: EJBED EJBED
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: Emp7678
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: (1) Record Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup [ref=f4e266]:
            - row [ref=f4e268] [cursor=pointer]:
              - cell "" [ref=f4e269]:
                - generic [ref=f4e272]:
                  - checkbox "" [ref=f4e273]
                  - generic [ref=f4e274]: 
              - cell "Emp7678" [ref=f4e276]
              - cell "Hailie Phoenix" [ref=f4e278]
              - cell "Barrows" [ref=f4e280]
              - cell [ref=f4e282]
              - cell [ref=f4e283]
              - cell [ref=f4e284]
              - cell [ref=f4e285]
              - cell [ref=f4e286]:
                - generic [ref=f4e287]:
                  - button "" [ref=f4e288]
                  - button "" [ref=f4e290]
    - generic [ref=f4e293]:
      - paragraph [ref=f4e294]: OrangeHRM OS 5.9
      - paragraph [ref=f4e295]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e296] [cursor=pointer]:
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
  44 |             await this.saveButton.click();
  45 |         }
  46 |     
  47 |          getNewAddedEmployeeName():Locator{
  48 |             return this.newEmployeeNameHeading;
  49 |         }
  50 |         
  51 |         async searchEmployee(empId:string){ 
  52 |             await this.employeeListTab.click();
  53 |             await this.employeeIdTextBox.fill(empId);
  54 |             await this.clickOnSearch();
  55 |         }
  56 |        getEmployeeByName(empName: string):Locator {
  57 |             return this.employeeTable.locator('.oxd-table-body').getByRole('cell').filter({ hasText: empName });
  58 |       }
  59 | 
  60 |         async deleteEmployee(empId:string){
  61 |             await this.searchEmployee(empId);
  62 |             this.employeeTable.locator('.oxd-table-body').getByRole('cell')
> 63 |             .locator('button').filter({has:this.page.locator('i.bi-trash')}).click();
     |                                                                              ^ Error: locator.click: Error: strict mode violation: getByRole('table').locator('.oxd-table-body').getByRole('cell').locator('button').filter({ has: locator('i.bi-trash') }) resolved to 49 elements:
  64 |             await this.page.pause();
  65 |         }
  66 | 
  67 |     }
  68 | 
```