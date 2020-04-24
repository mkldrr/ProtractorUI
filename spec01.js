//import { element } from "protractor";

//import { WebElement } from "protractor";
var appData = require('./test_data/appData.json');
var loginPage = require ('./pom/LoginPage');
var homePage = require('./utilities/NavigateToModule')



describe('Login',  function ()  {



  beforeEach ( async function (){
      //browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization =true;
    await  browser.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
    await browser.sleep(3000);
    await browser.manage().window().maximize();
  })  




  afterEach(async function(){
    await browser.sleep(4000);
    await browser.close();
 
  } )





it('Test Case Login', async function()  {  //if i want to skip this it, i can put x, or if i only want to run this it, i can but f
    
  //browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization =true; // 

    await  browser.sleep (4000);
    loginPage.userName.sendKeys(appData.userName)
    await  browser.sleep (4000);
    loginPage.password.sendKeys(appData.password)
    await  browser.sleep (4000);
    loginPage.loginBtn.click();
    await  browser.sleep (4000);

   homePage.tabName.click();
   await  browser.sleep (3000);
   homePage.moduleName.click();
   await  browser.sleep (3000);
   
   homePage.navigateTo();




});


xit('Test Case #2', () => {
    

    element(by.id("logInPanelHeading")).getText().then(function(text){
       console.log(text);  
       if(text== "LOGIN Panel") {
           console.log("Passed");
       }  else{
           console.log("Failed");
       }
       
    })
});

});
