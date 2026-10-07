import{Page,Locator} from "@playwright/test";
import{BasePage} from "./BasePage";
import { AdminData } from "../types/admin.types";


export class AdminPage extends BasePage{

    private readonly userManagementHeading:Locator;
    private readonly usertable:Locator;

    constructor(page:Page){
        super(page);
        this.userManagementHeading=page.getByRole('heading',{name:'User Management'});
        this.usertable=page.getByRole('table');
    }

    /**
     * To verify user management page
     * @returns 
     */
    getUserManagementPage():Locator{
         return this.userManagementHeading;
    }

    /**
     * To verify user table
     * @returns 
     */
    getUserTable():Locator{
        return this.usertable;
    }
    /**
     * Add Admin
     * @param 
     */
    async addAdmin(user:AdminData){
          await this.clickOnAddButton();
          await this.selectUserRole(user.role);
          await this.enterEmployeeName(user.employeeName);
          await this.selectStatus(user.status);
          await this.enterUserName(user.username);
          await this.enterPassword(user.password);
          await this.enterConfirmPassword(user.confirmPassword);
          await this.clickOnSaveButton();
    }

    /**
     * Search New Created User
     * @param
    */
    async searchUser(user:AdminData){
           await this.page.getByRole('heading',{name:'System Users'}).waitFor({timeout:50000});
           await this.enterUserName(user.username);
           await this.clickOnSearch();
    }

    /**
     * @param
     * @returns 
     */
    verifyNewUserCreatedSuccessfully(user:AdminData):Locator{
       return this.page.locator('.oxd-table-body .oxd-table-row .oxd-table-cell')
        .filter({hasText:`${user.username}`}); 
    }

    /**
     * Edit User
     * @param username 
     * @param status 
     */
    async editUser(status:string, username:string){
        await this.clickOnEditButton(username);
        await this.selectStatus(status);
        await this.clickOnSaveButton();
    }

    async deleteUser(username:string){
       await this.delete(username);
       await this.confirmDeletion();
    }

     expectUserIsDeleted():Locator{
        return this.page.locator('.oxd-text--toast-message').filter({hasText:'No Records Found'});
    }

    async verifyUserUpdatedDetails(username:string):Promise<Locator>{
        await this.clickOnEditButton(username);   
        const statusDropdown = this.page.locator('.oxd-input-group')
                               .filter({ hasText: 'Status' })
                               .locator('.oxd-select-text-input');
        return statusDropdown;
    }

    async selectUserRole(role:string){
        const userRole=this.page.locator('.oxd-input-group').filter({hasText:'User Role'});
        await userRole.locator('.oxd-select-text').click();
        await this.page.getByRole('option').filter({hasText:`${role}`}).click();
    }   

    async enterEmployeeName(employeeName:string){
        const employee=this.page.locator('.oxd-input-group').filter({hasText:'Employee Name'});
        await employee.locator('input').fill(employeeName);        
        const options = this.page.locator('.oxd-autocomplete-dropdown .oxd-autocomplete-option').filter({ hasText: employeeName }).first();
        await options.click();
    }

    async selectStatus(statusValue:string){
        const status= this.page.locator('.oxd-input-group').filter({hasText:'Status'});
        await status.locator('.oxd-select-text').click();
        await this.page.getByRole('option').filter({hasText:`${statusValue}`}).click();
    }

    async enterUserName(username:string){
        const user=this.page.locator('.oxd-input-group').filter({hasText:'Username'});
        await user.locator('.oxd-input').fill(username,{timeout:30000});
    }

    async enterPassword(passwordValue:string){
        const password=this.page.locator('.oxd-input-group').filter({hasText:/^Password$/});
        await password.locator('.oxd-input').fill(passwordValue);
    }

    async enterConfirmPassword(confirmPassword:string){
        const password=this.page.locator('.oxd-input-group').filter({hasText:'Confirm Password'});
        await password.locator('.oxd-input').fill(confirmPassword);
    }

}