

var HomePage = function navigateTo (){

    this.tabName=element(by.linkText("Admin"));
    this.moduleName=element(by.linkText("User Management"));
    this.subModuleName=element(by.linkText("Users"));

        this.navigateTo= async function(){
        browser.ignoreSynchronization =true;
        await browser.sleep(3000);
        homePage.tabName.click();
        await browser.sleep(3000);
        homePage.moduleName.click();
        await browser.sleep(3000);
        homePage.subModuleName.click();
        await browser.sleep(3000);
    
    
    
    }
}
    
    module.exports = new HomePage();