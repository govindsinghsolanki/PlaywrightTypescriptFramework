import{Page,Locator} from "@playwright/test";

export class BasePage{
 
    protected readonly page:Page;

    constructor(page:Page){
        this.page=page;
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
}