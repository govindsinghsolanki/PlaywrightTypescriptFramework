
import {generateUniqueId} from "../utils/data-generator.utils";
import {faker} from "@faker-js/faker";
import {EmployeeData} from "../types/employee.types";

 export function createEmployee():EmployeeData{
   const id= generateUniqueId();
   return {
     firstName:faker.person.firstName(),
     middleName: faker.person.middleName(),
     lastName: faker.person.lastName(),
     employeeId:`Emp${id}`
   };
}
