# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create-employee.spec.ts >> EMP-001 - Create employee
- Location: tests\create-employee.spec.ts:4:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.orangehrm-edit-employee-name')
Expected substring: "Maci Grant"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.orangehrm-edit-employee-name')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/186"

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
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e148]:
      - generic [ref=f3e149]:
        - generic [ref=f3e150]:
          - generic:
            - heading [level=6]
          - img "profile picture" [ref=f3e153] [cursor=pointer]
        - tablist [ref=f3e154]:
          - tab [ref=f3e155]:
            - link "Personal Details" [ref=f3e156] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/186
          - tab [ref=f3e157]:
            - link "Contact Details" [ref=f3e158] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/186
          - tab [ref=f3e159]:
            - link "Emergency Contacts" [ref=f3e160] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/186
          - tab [ref=f3e161]:
            - link "Dependents" [ref=f3e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/186
          - tab [ref=f3e163]:
            - link "Immigration" [ref=f3e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/186
          - tab [ref=f3e165]:
            - link "Job" [ref=f3e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/186
          - tab [ref=f3e167]:
            - link "Salary" [ref=f3e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/186
          - tab [ref=f3e169]:
            - link "Report-to" [ref=f3e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/186
          - tab [ref=f3e171]:
            - link "Qualifications" [ref=f3e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/186
          - tab [ref=f3e173]:
            - link "Memberships" [ref=f3e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/186
      - generic [ref=f3e175]:
        - generic [ref=f3e176]:
          - heading "Personal Details" [level=6] [ref=f3e177]
          - separator [ref=f3e178]
          - generic [ref=f3e179]:
            - generic [ref=f3e186]:
              - generic [ref=f3e187]: Employee Full Name*
              - generic [ref=f3e189]:
                - textbox "First Name" [ref=f3e192]
                - textbox "Middle Name" [ref=f3e195]
                - textbox "Last Name" [ref=f3e198]
            - separator [ref=f3e199]
            - generic [ref=f3e200]:
              - generic [ref=f3e201]:
                - generic [ref=f3e203]:
                  - generic [ref=f3e204]: Employee Id
                  - textbox [ref=f3e207]
                - generic [ref=f3e209]:
                  - generic [ref=f3e210]: Other Id
                  - textbox [ref=f3e213]
              - generic [ref=f3e214]:
                - generic [ref=f3e216]:
                  - generic [ref=f3e217]: Driver's License Number
                  - textbox [ref=f3e220]
                - generic [ref=f3e222]:
                  - generic [ref=f3e223]: License Expiry Date
                  - generic [ref=f3e227]:
                    - textbox "yyyy-dd-mm" [ref=f3e228]
                    - generic [ref=f3e229] [cursor=pointer]: 
            - separator [ref=f3e230]
            - generic [ref=f3e231]:
              - generic [ref=f3e232]:
                - generic [ref=f3e234]:
                  - generic [ref=f3e235]: Nationality
                  - generic [ref=f3e239] [cursor=pointer]:
                    - generic [ref=f3e240]: "-- Select --"
                    - generic [ref=f3e241]: 
                - generic [ref=f3e244]:
                  - generic [ref=f3e245]: Marital Status
                  - generic [ref=f3e249] [cursor=pointer]:
                    - generic [ref=f3e250]: "-- Select --"
                    - generic [ref=f3e251]: 
              - generic [ref=f3e253]:
                - generic [ref=f3e255]:
                  - generic [ref=f3e256]: Date of Birth
                  - generic [ref=f3e260]:
                    - textbox "yyyy-dd-mm" [ref=f3e261]
                    - generic [ref=f3e262] [cursor=pointer]: 
                - generic [ref=f3e264]:
                  - generic [ref=f3e265]: Gender
                  - generic [ref=f3e267]:
                    - generic [ref=f3e271] [cursor=pointer]:
                      - radio "Male" [ref=f3e272]
                      - text: Male
                    - generic [ref=f3e277] [cursor=pointer]:
                      - radio "Female" [ref=f3e278]
                      - text: Female
            - separator [ref=f3e280]
            - generic [ref=f3e281]:
              - paragraph [ref=f3e282]: "* Required"
              - button "Save" [ref=f3e283] [cursor=pointer]
        - generic [ref=f3e284]:
          - separator [ref=f3e285]
          - generic [ref=f3e286]:
            - heading "Custom Fields" [level=6] [ref=f3e287]
            - separator [ref=f3e288]
            - generic [ref=f3e289]:
              - generic [ref=f3e291]:
                - generic [ref=f3e293]:
                  - generic [ref=f3e294]: Blood Type
                  - generic [ref=f3e298] [cursor=pointer]:
                    - generic [ref=f3e299]: "-- Select --"
                    - generic [ref=f3e300]: 
                - generic [ref=f3e303]:
                  - generic [ref=f3e304]: Test_Field
                  - textbox [ref=f3e307]
              - separator [ref=f3e308]
              - button "Save" [ref=f3e310] [cursor=pointer]
        - generic [ref=f3e311]:
          - separator [ref=f3e312]
          - generic [ref=f3e314]:
            - heading "Attachments" [level=6] [ref=f3e315]
            - button " Add" [ref=f3e316] [cursor=pointer]:
              - generic [ref=f3e317]: 
              - text: Add
          - table [ref=f3e319]
    - generic [ref=f3e323]:
      - paragraph [ref=f3e324]: OrangeHRM OS 5.9
      - paragraph [ref=f3e325]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e326] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import{test,expect} from "../fixtures/hooks-fixture";
  2  | import { createEmployee } from "../factories/employee.factory";
  3  | 
  4  | test("EMP-001 - Create employee", async({gotoUrl,leftNavigationPage,employeePage})=>{
  5  | 
  6  |        leftNavigationPage.openPimModule(); 
  7  |        const employee= createEmployee();
  8  |        await employeePage.addEmployee(employee);
> 9  |        await expect(employeePage.newAddedEmployeeName()).toContainText(`${employee.firstName} ${employee.lastName}`);
     |                                                          ^ Error: expect(locator).toContainText(expected) failed
  10 | 
  11 | });
```