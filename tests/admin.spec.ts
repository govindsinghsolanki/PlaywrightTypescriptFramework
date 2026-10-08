import{test,expect} from "../fixtures/hooks-fixture.ts";
import adminData from "../test-data/admin-module-data.json";
import { createUserName} from "../factories/admin.factory.ts";              
import { AdminData } from "../types/admin.types.ts";

test("Verify Open User Management",async({adminPage,leftNavigationPage,gotoUrl})=>{
    await leftNavigationPage.openAdminModule();
    await expect(adminPage.getUserManagementPage()).toBeVisible();
    await expect(adminPage.getUserTable()).toBeVisible();
})

test("Add New User",{tag:["@Smoke","@Regression"]},async({adminPage,leftNavigationPage,gotoUrl})=>{

    const user:AdminData={
        /**
         * ...(spread operator is used to copy the contents of object or array into another object or array)
         */
        ...adminData.userManagement.addUser,
         username:createUserName()
    }
    await leftNavigationPage.openAdminModule();
    await adminPage.addAdmin(user);
    await adminPage.searchUser(user);
    await expect(adminPage.verifyNewUserCreatedSuccessfully(user)).toBeVisible();
})

test("Edit User",{tag:["@Smoke","@Regression"]},async({adminPage,leftNavigationPage,gotoUrl})=>{
  const user:AdminData={
        ...adminData.userManagement.addUser,
         username:createUserName()
    } 
    await leftNavigationPage.openAdminModule();
    await adminPage.addAdmin(user);
    await adminPage.searchUser(user);
    await adminPage.editUser(adminData.userManagement.editUser.status,user.username);
    await adminPage.searchUser(user);
    const status=await adminPage.verifyUserUpdatedDetails(user.username);
    await expect(status).toHaveText(adminData.userManagement.editUser.status)
})  

test("Delete User",{tag:["@Regression","@Functional"]},async({adminPage,leftNavigationPage,gotoUrl})=>{
    const user:AdminData={
        ...adminData.userManagement.addUser,
        username:createUserName()
    }
    await leftNavigationPage.openAdminModule();
    await adminPage.addAdmin(user);
    await adminPage.searchUser(user);
    await adminPage.deleteUser(user.username);
    await expect(adminPage.expectUserIsDeleted()).toBeVisible();
})