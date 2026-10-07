import{test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {DashboardPage} from "../pages/DashboardPage";
import {UserPage} from "../pages/UserPage";
import {LeftNavigationPage} from "../pages/LeftNavigationPage";
import {PimPage} from "../pages/PimPage";
import {EmployeePage} from "../pages/EmployeePage";
import {AdminPage} from "../pages/AdminPage";

type PomFixtureType={
    loginPage:LoginPage;  //loginPage-->Fixture Name
    dashboardPage:DashboardPage;
    userPage:UserPage;
    leftNavigationPage:LeftNavigationPage
    pimPage:PimPage;
    employeePage:EmployeePage;
    adminPage:AdminPage;
}

export const test=baseTest.extend<PomFixtureType>({
        loginPage:async({page},use)=>{  //loginPage-->Fixture Name
        const loginPage=new LoginPage(page); 
        await use(loginPage);
     },
        dashboardPage:async({page},use)=>{
         const dashboardPage=new DashboardPage(page);
         await use(dashboardPage);
    },
        userPage:async({page},use)=>{
          const userPage=new UserPage(page);
          await use(userPage);
    },
        leftNavigationPage:async({page},use)=>{
            const leftNavigationPage=new LeftNavigationPage(page);
            await use(leftNavigationPage);
    },
        pimPage:async({page},use)=>{
            const pimPage=new PimPage(page);
            await use(pimPage);
    },
        employeePage:async({page},use)=>{
            const employeePage=new EmployeePage(page);
            await use(employeePage);
    },
        adminPage:async({page},use)=>{
            const adminPage=new AdminPage(page);
            await use(adminPage);
    }        
        
})