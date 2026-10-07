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
Error: expect(locator).toBeVisible() failed

Locator:  locator('.orangehrm-edit-employee-name')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 25000ms
  - waiting for locator('.orangehrm-edit-employee-name')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/551" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/551"
    2 × locator resolved to <div data-v-af86f9aa="" class="orangehrm-edit-employee-name">…</div>
      - unexpected value "hidden"
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
      - paragraph: Andy Champlin
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
- heading [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/551
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/551
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/551
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/551
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/551
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/551
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/551
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/551
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/551
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/551
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name"
- textbox "Middle Name"
- textbox "Last Name"
- separator
- text: Employee Id
- textbox
- text: Other Id
- textbox
- text: Driver's License Number
- textbox
- text: License Expiry Date
- textbox "dd-mm-yyyy"
- text: 
- separator
- text: Nationality -- Select --  Marital Status -- Select --  Date of Birth
- textbox "dd-mm-yyyy"
- text:  Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- separator
- paragraph: "* Required"
- button "Save"
- separator
- heading "Attachments" [level=6]
- button " Add"
- table
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
  3  | // import { LeftNavigationPage } from "../pages/LeftNavigationPage";
  4  | // import { EmployeePage } from "../pages/EmployeePage";
  5  | 
  6  | test("EMP-001 - Create employee", async({gotoUrl,leftNavigationPage,employeePage})=>{
  7  |        leftNavigationPage.openPimModule(); 
  8  |        const employee= createEmployee();
  9  |        await employeePage.addEmployee(employee); 
  10 |        await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:25000});
  11 |        await expect(employeePage.verifyNewAddedEmployeeName()).toContainText(`${employee.firstName} ${employee.lastName}`);    
  12 | });
  13 | 
  14 | test("EMP-002 - Search Employee", async({gotoUrl,leftNavigationPage,employeePage})=>{
  15 |        leftNavigationPage.openPimModule(); 
  16 |        const employee= createEmployee();
  17 |        await employeePage.addEmployee(employee); 
  18 |        await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:15000});
  19 |        await employeePage.searchEmployee(employee.employeeId);
  20 |        await expect(employeePage.verifyEmployeeInTable(`${employee.firstName} ${employee.middleName}`))
  21 |       .toBeVisible({ timeout: 15000 });
  22 | });
  23 | 
  24 | test.only("EMP-003 - Delete employee",async({gotoUrl,leftNavigationPage,employeePage})=>{
  25 |        leftNavigationPage.openPimModule();  
  26 |        const employee= createEmployee();
  27 |        await employeePage.addEmployee(employee); 
> 28 |        await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:25000});
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  29 |        await employeePage.searchEmployee(employee.employeeId);
  30 |        await expect(employeePage.verifyEmployeeInTable(`${employee.firstName} ${employee.middleName}`))
  31 |       .toBeVisible({ timeout: 15000 });
  32 |        await employeePage.deleteEmployee(employee.employeeId);
  33 | 
  34 | })
  35 | 
```