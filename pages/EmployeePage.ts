import{Locator,Page} from "@playwright/test"
import{EmployeeData} from "../types/employee.types";
import{BasePage} from "./BasePage";

export class EmployeePage extends BasePage{
        private readonly firstNameTextBox:Locator;
        private readonly middleNameTextBox:Locator;
        private readonly lastNameTextBox:Locator;
        private readonly employeeIdTextBox:Locator;
        private readonly newEmployeeNameHeading:Locator;
        private readonly employeeListTab:Locator;
        private readonly employeeTable:Locator;
        private readonly confirmDeleteButton:Locator;

        constructor(page:Page){
            super(page);
            this.firstNameTextBox=page.getByRole('textbox',{name:'First Name'});
            this.middleNameTextBox=page.getByRole('textbox',{name:'Middle Name'});
            this.lastNameTextBox=page.getByRole('textbox',{name:'Last Name'});
            this.employeeIdTextBox=page.locator('.oxd-input-group').filter({hasText:'Employee Id'}).locator('input');
            this.employeeListTab=page.locator('.oxd-topbar-body-nav li').filter({hasText:'Employee List'});
            this.newEmployeeNameHeading=page.locator('.orangehrm-edit-employee-name');
            this.employeeTable= page.getByRole('table');
            this.confirmDeleteButton=page.getByRole('button',{name:'Yes, Delete'});
        }
    
    
        /**
         * To add new employee
         * @param firstName 
         * @param middleName 
         * @param lastName 
         */
         async addEmployee(employee:EmployeeData):Promise<void>{
            await this.clickOnAddButton();
            await this.firstNameTextBox.fill(employee.firstName);
            await this.middleNameTextBox.fill(employee.middleName);
            await this.lastNameTextBox.fill(employee.lastName);
            await this.employeeIdTextBox.fill(employee.employeeId);
            await this.clickOnSaveButton();
        }
    
         verifyNewAddedEmployeeName():Locator{
            return this.newEmployeeNameHeading;
        }
        
        async searchEmployee(empId:string){ 
            await this.employeeListTab.click();
            await this.employeeIdTextBox.fill(empId);
            await this.clickOnSearch();
        }
       
        getEmployeeInTable(empName: string):Locator {
            return this.employeeTable.locator('.oxd-table-body').getByRole('cell').filter({ hasText: empName });
      }

        async deleteEmployee(empId:string){
            const employeeRow=this.employeeTable.locator('.oxd-table-body .oxd-table-row').filter({hasText:empId});
            await employeeRow.locator('i.bi-trash').click();
            await this.confirmDeleteButton.click();
        }

    }
