# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> Delete User
- Location: tests\admin.spec.ts:41:6

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-toast--info')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('.oxd-toast--info')
    14 × locator resolved to 0 elements
       - unexpected value "0"

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
              - paragraph [ref=f3e128]: Bilol Abdurasul
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
              - textbox [ref=f3e176]
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
            - button "Search" [ref=f3e208] [cursor=pointer]
      - generic [ref=f3e209]:
        - button " Add" [ref=f3e211] [cursor=pointer]:
          - generic [ref=f3e212]: 
          - text: Add
        - generic [ref=f3e213]:
          - separator [ref=f3e214]
          - generic [ref=f3e215]: (27) Records Found
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
              - cell "abcd_20261007132137015" [ref=f3e250]
              - cell "Admin" [ref=f3e252]
              - cell "Orange Test" [ref=f3e254]
              - cell "Enabled" [ref=f3e256]
              - cell [ref=f3e258]:
                - generic [ref=f3e259]:
                  - button "" [ref=f3e260] [cursor=pointer]
                  - button "" [ref=f3e262] [cursor=pointer]
            - row [ref=f3e265]:
              - cell "" [ref=f3e266]:
                - generic [ref=f3e269] [cursor=pointer]:
                  - checkbox "" [ref=f3e270]
                  - generic [ref=f3e271]: 
              - cell "abcd_20261007132643765" [ref=f3e273]
              - cell "Admin" [ref=f3e275]
              - cell "Orange Test" [ref=f3e277]
              - cell "Enabled" [ref=f3e279]
              - cell [ref=f3e281]:
                - generic [ref=f3e282]:
                  - button "" [ref=f3e283] [cursor=pointer]
                  - button "" [ref=f3e285] [cursor=pointer]
            - row [ref=f3e288]:
              - cell "" [ref=f3e289]:
                - generic [ref=f3e292] [cursor=pointer]:
                  - checkbox "" [ref=f3e293]
                  - generic [ref=f3e294]: 
              - cell "abc_cyber" [ref=f3e296]
              - cell "ESS" [ref=f3e298]
              - cell "abc cyber" [ref=f3e300]
              - cell "Enabled" [ref=f3e302]
              - cell [ref=f3e304]:
                - generic [ref=f3e305]:
                  - button "" [ref=f3e306] [cursor=pointer]
                  - button "" [ref=f3e308] [cursor=pointer]
            - row [ref=f3e311]:
              - cell "" [ref=f3e312]:
                - generic [ref=f3e315] [cursor=pointer]:
                  - checkbox "" [ref=f3e316]
                  - generic [ref=f3e317]: 
              - cell "abhishekpl" [ref=f3e319]
              - cell "ESS" [ref=f3e321]
              - cell "Ranga Akunuri" [ref=f3e323]
              - cell "Enabled" [ref=f3e325]
              - cell [ref=f3e327]:
                - generic [ref=f3e328]:
                  - button "" [ref=f3e329] [cursor=pointer]
                  - button "" [ref=f3e331] [cursor=pointer]
            - row [ref=f3e334]:
              - cell "" [ref=f3e335]:
                - generic [ref=f3e339]:
                  - checkbox "" [ref=f3e340]
                  - generic [ref=f3e341]: 
              - cell "Admin" [ref=f3e343]
              - cell "Admin" [ref=f3e345]
              - cell "Bilol Abdurasul" [ref=f3e347]
              - cell "Enabled" [ref=f3e349]
              - cell [ref=f3e351]:
                - generic [ref=f3e352]:
                  - button "" [ref=f3e353] [cursor=pointer]
                  - button "" [ref=f3e355] [cursor=pointer]
            - row [ref=f3e358]:
              - cell "" [ref=f3e359]:
                - generic [ref=f3e362] [cursor=pointer]:
                  - checkbox "" [ref=f3e363]
                  - generic [ref=f3e364]: 
              - cell "amits" [ref=f3e366]
              - cell "ESS" [ref=f3e368]
              - cell "Amit Shembekar" [ref=f3e370]
              - cell "Enabled" [ref=f3e372]
              - cell [ref=f3e374]:
                - generic [ref=f3e375]:
                  - button "" [ref=f3e376] [cursor=pointer]
                  - button "" [ref=f3e378] [cursor=pointer]
            - row [ref=f3e381]:
              - cell "" [ref=f3e382]:
                - generic [ref=f3e385] [cursor=pointer]:
                  - checkbox "" [ref=f3e386]
                  - generic [ref=f3e387]: 
              - cell "autoUser_FEMMaWbM" [ref=f3e389]
              - cell "Admin" [ref=f3e391]
              - cell "Orange Test" [ref=f3e393]
              - cell "Enabled" [ref=f3e395]
              - cell [ref=f3e397]:
                - generic [ref=f3e398]:
                  - button "" [ref=f3e399] [cursor=pointer]
                  - button "" [ref=f3e401] [cursor=pointer]
            - row [ref=f3e404]:
              - cell "" [ref=f3e405]:
                - generic [ref=f3e408] [cursor=pointer]:
                  - checkbox "" [ref=f3e409]
                  - generic [ref=f3e410]: 
              - cell "autoUser_HSEbVYYI" [ref=f3e412]
              - cell "Admin" [ref=f3e414]
              - cell "Orange Test" [ref=f3e416]
              - cell "Enabled" [ref=f3e418]
              - cell [ref=f3e420]:
                - generic [ref=f3e421]:
                  - button "" [ref=f3e422] [cursor=pointer]
                  - button "" [ref=f3e424] [cursor=pointer]
            - row [ref=f3e427]:
              - cell "" [ref=f3e428]:
                - generic [ref=f3e431] [cursor=pointer]:
                  - checkbox "" [ref=f3e432]
                  - generic [ref=f3e433]: 
              - cell "Charlie1132" [ref=f3e435]
              - cell "ESS" [ref=f3e437]
              - cell "Charles Carter" [ref=f3e439]
              - cell "Disabled" [ref=f3e441]
              - cell [ref=f3e443]:
                - generic [ref=f3e444]:
                  - button "" [ref=f3e445] [cursor=pointer]
                  - button "" [ref=f3e447] [cursor=pointer]
            - row [ref=f3e450]:
              - cell "" [ref=f3e451]:
                - generic [ref=f3e454] [cursor=pointer]:
                  - checkbox "" [ref=f3e455]
                  - generic [ref=f3e456]: 
              - cell "draksheshivalila" [ref=f3e458]
              - cell "ESS" [ref=f3e460]
              - cell "drakshe shivalila" [ref=f3e462]
              - cell "Enabled" [ref=f3e464]
              - cell [ref=f3e466]:
                - generic [ref=f3e467]:
                  - button "" [ref=f3e468] [cursor=pointer]
                  - button "" [ref=f3e470] [cursor=pointer]
            - row [ref=f3e473]:
              - cell "" [ref=f3e474]:
                - generic [ref=f3e477] [cursor=pointer]:
                  - checkbox "" [ref=f3e478]
                  - generic [ref=f3e479]: 
              - cell "emp6bdca7cc" [ref=f3e481]
              - cell "ESS" [ref=f3e483]
              - cell "Aman6bdca7cc Singh" [ref=f3e485]
              - cell "Enabled" [ref=f3e487]
              - cell [ref=f3e489]:
                - generic [ref=f3e490]:
                  - button "" [ref=f3e491] [cursor=pointer]
                  - button "" [ref=f3e493] [cursor=pointer]
            - row [ref=f3e496]:
              - cell "" [ref=f3e497]:
                - generic [ref=f3e500] [cursor=pointer]:
                  - checkbox "" [ref=f3e501]
                  - generic [ref=f3e502]: 
              - cell "emp6fcf4d8c" [ref=f3e504]
              - cell "ESS" [ref=f3e506]
              - cell "Aman6fcf4d8c Singh" [ref=f3e508]
              - cell "Enabled" [ref=f3e510]
              - cell [ref=f3e512]:
                - generic [ref=f3e513]:
                  - button "" [ref=f3e514] [cursor=pointer]
                  - button "" [ref=f3e516] [cursor=pointer]
            - row [ref=f3e519]:
              - cell "" [ref=f3e520]:
                - generic [ref=f3e523] [cursor=pointer]:
                  - checkbox "" [ref=f3e524]
                  - generic [ref=f3e525]: 
              - cell "FMLName" [ref=f3e527]
              - cell "ESS" [ref=f3e529]
              - cell "Qwerty LName" [ref=f3e531]
              - cell "Enabled" [ref=f3e533]
              - cell [ref=f3e535]:
                - generic [ref=f3e536]:
                  - button "" [ref=f3e537] [cursor=pointer]
                  - button "" [ref=f3e539] [cursor=pointer]
            - row [ref=f3e542]:
              - cell "" [ref=f3e543]:
                - generic [ref=f3e546] [cursor=pointer]:
                  - checkbox "" [ref=f3e547]
                  - generic [ref=f3e548]: 
              - cell "FMLName1" [ref=f3e550]
              - cell "ESS" [ref=f3e552]
              - cell "FName LName" [ref=f3e554]
              - cell "Enabled" [ref=f3e556]
              - cell [ref=f3e558]:
                - generic [ref=f3e559]:
                  - button "" [ref=f3e560] [cursor=pointer]
                  - button "" [ref=f3e562] [cursor=pointer]
            - row [ref=f3e565]:
              - cell "" [ref=f3e566]:
                - generic [ref=f3e569] [cursor=pointer]:
                  - checkbox "" [ref=f3e570]
                  - generic [ref=f3e571]: 
              - cell "hetmeyer1791352889303" [ref=f3e573]
              - cell "Admin" [ref=f3e575]
              - cell "Thomas Benny" [ref=f3e577]
              - cell "Enabled" [ref=f3e579]
              - cell [ref=f3e581]:
                - generic [ref=f3e582]:
                  - button "" [ref=f3e583] [cursor=pointer]
                  - button "" [ref=f3e585] [cursor=pointer]
            - row [ref=f3e588]:
              - cell "" [ref=f3e589]:
                - generic [ref=f3e592] [cursor=pointer]:
                  - checkbox "" [ref=f3e593]
                  - generic [ref=f3e594]: 
              - cell "hetmeyer1791352996770" [ref=f3e596]
              - cell "Admin" [ref=f3e598]
              - cell "Thomas Benny" [ref=f3e600]
              - cell "Enabled" [ref=f3e602]
              - cell [ref=f3e604]:
                - generic [ref=f3e605]:
                  - button "" [ref=f3e606] [cursor=pointer]
                  - button "" [ref=f3e608] [cursor=pointer]
            - row [ref=f3e611]:
              - cell "" [ref=f3e612]:
                - generic [ref=f3e615] [cursor=pointer]:
                  - checkbox "" [ref=f3e616]
                  - generic [ref=f3e617]: 
              - cell "Jobinsam@6742" [ref=f3e619]
              - cell "ESS" [ref=f3e621]
              - cell "Jobin Sam" [ref=f3e623]
              - cell "Enabled" [ref=f3e625]
              - cell [ref=f3e627]:
                - generic [ref=f3e628]:
                  - button "" [ref=f3e629] [cursor=pointer]
                  - button "" [ref=f3e631] [cursor=pointer]
            - row [ref=f3e634]:
              - cell "" [ref=f3e635]:
                - generic [ref=f3e638] [cursor=pointer]:
                  - checkbox "" [ref=f3e639]
                  - generic [ref=f3e640]: 
              - cell "K8mX2vQ9nL4pT7rY1cD6wH3jF5sU8eB_EHTFPUZd" [ref=f3e642]
              - cell "Admin" [ref=f3e644]
              - cell "Orange Test" [ref=f3e646]
              - cell "Enabled" [ref=f3e648]
              - cell [ref=f3e650]:
                - generic [ref=f3e651]:
                  - button "" [ref=f3e652] [cursor=pointer]
                  - button "" [ref=f3e654] [cursor=pointer]
            - row [ref=f3e657]:
              - cell "" [ref=f3e658]:
                - generic [ref=f3e661] [cursor=pointer]:
                  - checkbox "" [ref=f3e662]
                  - generic [ref=f3e663]: 
              - cell "K8mX2vQ9nL4pT7rY1cD6wH3jF5sU8eB_HNeIOOQT" [ref=f3e665]
              - cell "Admin" [ref=f3e667]
              - cell "Orange Test" [ref=f3e669]
              - cell "Enabled" [ref=f3e671]
              - cell [ref=f3e673]:
                - generic [ref=f3e674]:
                  - button "" [ref=f3e675] [cursor=pointer]
                  - button "" [ref=f3e677] [cursor=pointer]
            - row [ref=f3e680]:
              - cell "" [ref=f3e681]:
                - generic [ref=f3e684] [cursor=pointer]:
                  - checkbox "" [ref=f3e685]
                  - generic [ref=f3e686]: 
              - cell "kunj12" [ref=f3e688]
              - cell "ESS" [ref=f3e690]
              - cell "Ranga Akunuri" [ref=f3e692]
              - cell "Enabled" [ref=f3e694]
              - cell [ref=f3e696]:
                - generic [ref=f3e697]:
                  - button "" [ref=f3e698] [cursor=pointer]
                  - button "" [ref=f3e700] [cursor=pointer]
            - row [ref=f3e703]:
              - cell "" [ref=f3e704]:
                - generic [ref=f3e707] [cursor=pointer]:
                  - checkbox "" [ref=f3e708]
                  - generic [ref=f3e709]: 
              - cell "omk12434387" [ref=f3e711]
              - cell "ESS" [ref=f3e713]
              - cell "Shruti rk" [ref=f3e715]
              - cell "Enabled" [ref=f3e717]
              - cell [ref=f3e719]:
                - generic [ref=f3e720]:
                  - button "" [ref=f3e721] [cursor=pointer]
                  - button "" [ref=f3e723] [cursor=pointer]
            - row [ref=f3e726]:
              - cell "" [ref=f3e727]:
                - generic [ref=f3e730] [cursor=pointer]:
                  - checkbox "" [ref=f3e731]
                  - generic [ref=f3e732]: 
              - cell "RajPatil" [ref=f3e734]
              - cell "ESS" [ref=f3e736]
              - cell "Raj Cybersecurity" [ref=f3e738]
              - cell "Enabled" [ref=f3e740]
              - cell [ref=f3e742]:
                - generic [ref=f3e743]:
                  - button "" [ref=f3e744] [cursor=pointer]
                  - button "" [ref=f3e746] [cursor=pointer]
            - row [ref=f3e749]:
              - cell "" [ref=f3e750]:
                - generic [ref=f3e753] [cursor=pointer]:
                  - checkbox "" [ref=f3e754]
                  - generic [ref=f3e755]: 
              - cell "test_Erma62" [ref=f3e757]
              - cell "ESS" [ref=f3e759]
              - cell "Bilol Employee1791353338587" [ref=f3e761]
              - cell "Enabled" [ref=f3e763]
              - cell [ref=f3e765]:
                - generic [ref=f3e766]:
                  - button "" [ref=f3e767] [cursor=pointer]
                  - button "" [ref=f3e769] [cursor=pointer]
            - row [ref=f3e772]:
              - cell "" [ref=f3e773]:
                - generic [ref=f3e776] [cursor=pointer]:
                  - checkbox "" [ref=f3e777]
                  - generic [ref=f3e778]: 
              - cell "user5470297" [ref=f3e780]
              - cell "ESS" [ref=f3e782]
              - cell "TimeF54702 TimeL54702" [ref=f3e784]
              - cell "Enabled" [ref=f3e786]
              - cell [ref=f3e788]:
                - generic [ref=f3e789]:
                  - button "" [ref=f3e790] [cursor=pointer]
                  - button "" [ref=f3e792] [cursor=pointer]
            - row [ref=f3e795]:
              - cell "" [ref=f3e796]:
                - generic [ref=f3e799] [cursor=pointer]:
                  - checkbox "" [ref=f3e800]
                  - generic [ref=f3e801]: 
              - cell "User_James.Smith_32750290" [ref=f3e803]
              - cell "ESS" [ref=f3e805]
              - cell "James Smith" [ref=f3e807]
              - cell "Enabled" [ref=f3e809]
              - cell [ref=f3e811]:
                - generic [ref=f3e812]:
                  - button "" [ref=f3e813] [cursor=pointer]
                  - button "" [ref=f3e815] [cursor=pointer]
            - row [ref=f3e818]:
              - cell "" [ref=f3e819]:
                - generic [ref=f3e822] [cursor=pointer]:
                  - checkbox "" [ref=f3e823]
                  - generic [ref=f3e824]: 
              - cell "virats" [ref=f3e826]
              - cell "ESS" [ref=f3e828]
              - cell "virat ko" [ref=f3e830]
              - cell "Enabled" [ref=f3e832]
              - cell [ref=f3e834]:
                - generic [ref=f3e835]:
                  - button "" [ref=f3e836] [cursor=pointer]
                  - button "" [ref=f3e838] [cursor=pointer]
            - row [ref=f3e841]:
              - cell "" [ref=f3e842]:
                - generic [ref=f3e845] [cursor=pointer]:
                  - checkbox "" [ref=f3e846]
                  - generic [ref=f3e847]: 
              - cell "vishnu4076" [ref=f3e849]
              - cell "Admin" [ref=f3e851]
              - cell "Peter Anderson" [ref=f3e853]
              - cell "Enabled" [ref=f3e855]
              - cell [ref=f3e857]:
                - generic [ref=f3e858]:
                  - button "" [ref=f3e859] [cursor=pointer]
                  - button "" [ref=f3e861] [cursor=pointer]
    - generic [ref=f3e864]:
      - paragraph [ref=f3e865]: OrangeHRM OS 5.9
      - paragraph [ref=f3e866]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e867] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import{test,expect} from "../fixtures/hooks-fixture.ts";
  2  | import adminData from "../test-data/admin-module-data.json";
  3  | import { createUserName} from "../factories/admin.factory.ts";              
  4  | import { AdminData } from "../types/admin.types.ts";
  5  | 
  6  | test("Verify Open User Management",async({adminPage,leftNavigationPage,gotoUrl})=>{
  7  |     await leftNavigationPage.openAdminModule();
  8  |     await expect(adminPage.getUserManagementPage()).toBeVisible();
  9  |     await expect(adminPage.getUserTable()).toBeVisible();
  10 | })
  11 | 
  12 | test("Add New User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  13 | 
  14 |     const user:AdminData={
  15 |         /**
  16 |          * ...(spread operator is used to copy the contents of object or array into another object or array)
  17 |          */
  18 |         ...adminData.userManagement.addUser,
  19 |          username:createUserName()
  20 |     }
  21 |     await leftNavigationPage.openAdminModule();
  22 |     await adminPage.addAdmin(user);
  23 |     await adminPage.searchNewCreatedUser(user);
  24 |     await expect(adminPage.verifyNewUserCreatedSuccessfully(user)).toBeVisible();
  25 | })
  26 | 
  27 | test("Edit User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  28 |   const user:AdminData={
  29 |         ...adminData.userManagement.addUser,
  30 |          username:createUserName()
  31 |     } 
  32 |     await leftNavigationPage.openAdminModule();
  33 |     await adminPage.addAdmin(user);
  34 |     await adminPage.searchNewCreatedUser(user);
  35 |     await adminPage.editUser(adminData.userManagement.editUser.status,user.username);
  36 |     await adminPage.searchNewCreatedUser(user);
  37 |     const status=await adminPage.verifyUserUpdatedDetails(user.username);
  38 |     await expect(status).toHaveText(adminData.userManagement.editUser.status);
  39 | })  
  40 | 
  41 | test.only("Delete User",async({adminPage,leftNavigationPage,gotoUrl})=>{
  42 |     const user:AdminData={
  43 |         ...adminData.userManagement.addUser,
  44 |         username:createUserName()
  45 |     }
  46 |     await leftNavigationPage.openAdminModule();
  47 |     await adminPage.addAdmin(user);
  48 |     console.log("Username is: "+user.username);
  49 |     await adminPage.searchNewCreatedUser(user);
  50 |     await adminPage.deleteUser(user.username);
  51 |     
> 52 |     await expect(adminPage.expectUserIsDeleted()).toHaveCount(1);
     |                                                   ^ Error: expect(locator).toHaveCount(expected) failed
  53 | 
  54 | })
```