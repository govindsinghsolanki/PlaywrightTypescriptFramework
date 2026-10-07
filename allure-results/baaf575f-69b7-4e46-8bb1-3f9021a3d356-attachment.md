# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-001 - Create employee
- Location: tests\create-employee.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f2e2]:
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
                - paragraph [ref=f2e127]: BR easy
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
                    - textbox "First Name" [ref=f2e174]: Henderson
                    - textbox "Middle Name" [ref=f2e177]: Eleanor
                    - textbox "Last Name" [ref=f2e180]: Mann
                - generic [ref=f2e183]:
                  - generic [ref=f2e184]: Employee Id
                  - textbox [ref=f2e187]: Emp5375
              - separator [ref=f2e188]
              - generic [ref=f2e189]:
                - paragraph [ref=f2e190]: Create Login Details
                - checkbox [ref=f2e193]
          - separator [ref=f2e195]
          - generic [ref=f2e196]:
            - paragraph [ref=f2e197]: "* Required"
            - button "Cancel" [ref=f2e198] [cursor=pointer]
            - button "Save" [active] [ref=f2e199] [cursor=pointer]
      - generic [ref=f2e200]:
        - paragraph [ref=f2e201]: OrangeHRM OS 5.9
        - paragraph [ref=f2e202]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f2e203] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f2e205] [cursor=pointer]:
    - generic [ref=f2e206]:
      - generic [ref=f2e207]: 
      - generic [ref=f2e210]:
        - paragraph [ref=f2e211]: Success
        - paragraph [ref=f2e212]: Successfully Saved
    - button "×" [ref=f2e214]
```

# Test source

```ts
  1  | import{test,expect} from "../fixtures/hooks-fixture";
  2  | import { createEmployee } from "../factories/employee.factory";
  3  | 
  4  | test("EMP-001 - Create employee", async({page,gotoUrl,leftNavigationPage,employeePage})=>{
  5  | 
  6  |        leftNavigationPage.openPimModule(); 
  7  |        const employee= createEmployee();
  8  |        await employeePage.addEmployee(employee);
> 9  |        page.waitForTimeout(10000);
     |             ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  10 |        console.log("Text is: "+await employeePage.newAddedEmployeeName().textContent());
  11 |        // await expect(employeePage.newAddedEmployeeName()).toContainText(`${employee.firstName} ${employee.lastName}`);
  12 |        
  13 | });
```