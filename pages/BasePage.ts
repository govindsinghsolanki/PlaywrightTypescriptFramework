import{Page,Locator} from "@playwright/test";

export class BasePage{
 
    protected readonly page:Page;
    protected readonly searchButton:Locator;
    protected readonly addButton:Locator;
    protected readonly saveButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.searchButton=page.getByRole('button',{name:' Search '});
        this.addButton=page.getByRole('button',{name:'Add'});
        this.saveButton=page.getByRole('button',{name:'Save'});
    }

    protected async clickOnSearch(){
       await this.searchButton.click();   
    }

    protected async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
}

    protected async goBack() {
          await this.page.goBack();
}

    protected async waitForPageLoad() {
           await this.page.waitForLoadState("networkidle");
}

    protected async clickOnSaveButton(){
           await this.saveButton.click();   
}
    
    protected async clickOnAddButton(){
           await this.addButton.click();   
}
    
    protected async clickOnEditButton(username:string){
       const userRow= this.page.locator('.oxd-table-row')
        .filter({hasText:username});
        await userRow.locator('.oxd-icon-button')
        .filter({has:this.page.locator('.bi-pencil-fill')}).click();
    }

    protected async delete(username:string){
            const userRow=this.page.locator('.oxd-table-row').filter({hasText:username});
            await userRow.locator('.oxd-icon-button')
            .filter({has:this.page.locator('.bi-trash')}).click();
    }

    protected async confirmDeletion(){
         await this.page.getByRole('button',{name:'Yes, Delete'}).click();
    }
    
}