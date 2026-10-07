# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-002 - Search Employee
- Location: tests\create-employee.spec.ts:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('table').locator('.oxd-table-body').getByRole('cell').filter({ hasText: 'Antwon Samuel' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('table').locator('.oxd-table-body').getByRole('cell').filter({ hasText: 'Antwon Samuel' })
  - Test timeout of 30000ms exceeded.

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: cgeeae king
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox: Emp1426
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import{test,expect} from "../fixtures/hooks-fixture";
  2  | import { createEmployee } from "../factories/employee.factory";
  3  | 
  4  | test("EMP-001 - Create employee", async({gotoUrl,leftNavigationPage,employeePage})=>{
  5  |        leftNavigationPage.openPimModule(); 
  6  |        const employee= createEmployee();
  7  |        await employeePage.addEmployee(employee); 
  8  |        await expect(employeePage.getNewAddedEmployeeName()).toBeVisible({timeout:10000});
  9  |        await expect(employeePage.getNewAddedEmployeeName()).toContainText(`${employee.firstName} ${employee.lastName}`);    
  10 | });
  11 | 
  12 | test.only("EMP-002 - Search Employee", async({gotoUrl,leftNavigationPage,employeePage})=>{
  13 |        leftNavigationPage.openPimModule(); 
  14 |        const employee= createEmployee();
  15 |        await employeePage.addEmployee(employee); 
  16 |        // await expect(employeePage.getNewAddedEmployeeName()).toBeVisible({timeout:15000});
  17 |        await employeePage.searchEmployee(employee.employeeId);
  18 |        await expect(employeePage.getEmployeeByName(`${employee.firstName} ${employee.middleName}`))
> 19 |       .toBeVisible({ timeout: 10000 });
     |        ^ Error: expect(locator).toBeVisible() failed
  20 | });
  21 | 
```