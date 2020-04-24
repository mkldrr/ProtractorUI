//import { browser } from "protractor";


var LoginPage= function(){


    //this.url= browser.get("ttps://opensource-demo.orangehrmlive.com/index.php/auth/login");
    this.userName =  element(by.id("txtUsername"));
    this.password = element(by.id("txtPassword"));
    this.loginBtn = element(by.xpath("//*[@id='btnLogin']"));



}

module.exports = new LoginPage();








