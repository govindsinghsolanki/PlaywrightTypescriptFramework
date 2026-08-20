import{Page,Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    // private readonly page:Page;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;
    private readonly invalidCredentialsErrorPopup:Locator;

    constructor(page:Page){
        super(page);
        // this.page=page;
        this.userNameInput=page.locator('input[name="username"]');
        this.passwordInput=page.locator('input[name="password"]');
        this.loginButton=page.getByRole("button",{name:'Login'});
        this.invalidCredentialsErrorPopup=page.getByRole("alert");
    }


    /**
     * To open URL into browser
     */
    async gotoOrangeHrm(){
           await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
        }

        
    /**
     * To Login into OrangeHRM application
     * @param userName 
     * @param password  
     */    
    async loginOrangeHrm(userName:string,password:string){
          await this.userNameInput.fill(userName);
          await this.passwordInput.fill(password);
          await this.loginButton.click();
    }

    /**
     * To get invalid credential error message
     * @returns 
     */ 
    public getInvalidCredentialsErrorMessage():Locator{
            return this.invalidCredentialsErrorPopup;
    }

}
