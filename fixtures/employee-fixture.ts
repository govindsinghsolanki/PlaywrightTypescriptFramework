import { createEmployee } from "../factories/employee.factory";
import{test as baseTest} from "../fixtures/hooks-fixture";

type EmployeeFixture={
     employee:ReturnType<typeof createEmployee>;
}
export const test=baseTest.extend<EmployeeFixture>({
    
    employee:async({employeePage,gotoUrl},use)=>{
        const employee= createEmployee();
        await employeePage.addEmployee(employee); 
        await use(employee);
    }
})

export {expect} from "@playwright/test";
