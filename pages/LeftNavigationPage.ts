import{Page,Locator} from "@playwright/test";


export class LeftNavigationPage{

    private readonly page:Page;
    private readonly pimLink:Locator;
    private readonly orangeHrmLogo:Locator;
    private readonly leftNavigationPanel:Locator;

    constructor(page:Page){
        this.page=page;
        this.pimLink= page.getByRole('link',{name:'PIM'});
        this.orangeHrmLogo=page.getByAltText("client brand banner");
        this.leftNavigationPanel=page.getByRole('navigation').locator('.oxd-sidepanel-body');
    }

    /**
     * To Open Pim Module
     */
    public async openPimModule(){
        await this.pimLink.click();
    }
    public orangeHrmLogoVisible():Locator{
        return this.orangeHrmLogo;
    }
    public leftNavigationPanelVisible():Locator{
           return this.leftNavigationPanel;
    }
}