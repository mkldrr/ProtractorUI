


 var homePage = require('../pom/HomePage');



var  Page=  function navigateTo(){
    
    
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

module.exports=new Page();