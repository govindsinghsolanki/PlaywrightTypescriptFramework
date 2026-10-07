import{test,expect} from "../fixtures/employee-fixture";

test.beforeEach("Open PIM Module", async({leftNavigationPage})=>{
       leftNavigationPage.openPimModule(); 
})

test("EMP-001 - Create employee", {tag:["@Smoke","@CreateEmployee","@Employee"]}, async({employee,employeePage})=>{
       // const employee= createEmployee();
       // await employeePage.addEmployee(employee); 
       await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:30000});
       await expect(employeePage.verifyNewAddedEmployeeName()).toContainText(`${employee.firstName} ${employee.lastName}`);    
});

test("EMP-002 - Search Employee", {tag:["@Smoke","@SearchEmployee","@Employee"]},async({employee,employeePage})=>{
       await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:15000});
       await employeePage.searchEmployee(employee.employeeId);
       await expect(employeePage.getEmployeeInTable(`${employee.firstName} ${employee.middleName}`))
      .toBeVisible({ timeout: 15000 });
});

test("EMP-003 - Delete employee",{tag:["@Smoke","@Regression","@DeleteEmployee","@Employee"]},async({employee,employeePage})=>{
       await expect(employeePage.verifyNewAddedEmployeeName()).toBeVisible({timeout:30000});
       await employeePage.searchEmployee(employee.employeeId);
       await expect(employeePage.getEmployeeInTable(`${employee.firstName} ${employee.middleName}`))
      .toBeVisible({ timeout: 15000 });
       await employeePage.deleteEmployee(employee.employeeId);
})
