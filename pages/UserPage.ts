import{Page,Locator} from "@playwright/test";

export class UserPage{

    private readonly page:Page;
    private readonly userMenuButton:Locator;
    private readonly logoutButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.userMenuButton=page.locator(".oxd-userdropdown-tab");
        this.logoutButton=page.getByRole("menuitem",{name:'Logout'});
    }

    public async logout(){
        await this.userMenuButton.click();
        await this.logoutButton.click();
    }
}