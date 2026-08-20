import{Page,Locator} from "@playwright/test";

export class DashboardPage{

    private readonly page:Page;
    private readonly dashboardHeadingText:Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardHeadingText=page.getByRole("heading",{name:"Dashboard"});
    }

    public getDashboardHeading():Locator{
        return this.dashboardHeadingText;
    }

}