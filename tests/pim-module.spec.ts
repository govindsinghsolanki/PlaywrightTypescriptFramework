import{test,expect} from "../fixtures/hooks-fixture";
import pimModuleData from "../test-data/pim-module-data.json"

test("[PIM] Verify that new employee is successfully created under PIM module",{tag:['@Sanity','@Functional']},async({gotoUrl,leftNavigationPage,pimPage})=>{

    /**
     * To add steps we use test.step and also will display in the report
     */
    await test.step("Open PIM Module",async()=>{
         await leftNavigationPage.openPimModule();
    })
    await test.step("Add new Employee in PIM Module",async()=>{
         await pimPage.addEmployee(pimModuleData.first_name,pimModuleData.middle_name,pimModuleData.last_name);
         await expect(pimPage.newAddedEmployeeName()).toHaveText(`${pimModuleData.first_name} ${pimModuleData.last_name}`,{timeout:10000});
    })

})