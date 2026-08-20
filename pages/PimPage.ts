import{Page,Locator} from "@playwright/test";

export class PimPage
{
    private readonly page:Page;
    private readonly addPimButton:Locator;
    private readonly firstNameTextBox:Locator;
    private readonly middleNameTextBox:Locator;
    private readonly lastNameTextBox:Locator;
    private readonly newEmployeeNameHeading:Locator;
    private readonly saveButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.addPimButton=page.getByRole('button',{name:'Add'});
        this.firstNameTextBox=page.getByRole('textbox',{name:'First Name'});
        this.middleNameTextBox=page.getByRole('textbox',{name:'Middle Name'});
        this.lastNameTextBox=page.getByRole('textbox',{name:'Last Name'});
        this.saveButton=page.getByRole('button',{name:'Save'});
        this.newEmployeeNameHeading=page.locator('.orangehrm-edit-employee-name');
    }


    /**
     * To add new employee
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */
    public async addEmployee(firstName:string, middleName:string, lastName:string){
        await this.addPimButton.click();
        await this.firstNameTextBox.fill(firstName);
        await this.middleNameTextBox.fill(middleName);
        await this.lastNameTextBox.fill(lastName);
        await this.saveButton.click();
    }

    public newAddedEmployeeName():Locator{
        return this.newEmployeeNameHeading;
    }

}