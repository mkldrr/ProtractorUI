var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config={
//connecting to WebDriver JS



directConnect: true,
//seleniumAddress:'http://localhost:4444/localhost/wd/hub',

//BrowserName
capabilities: {
    browserName: 'chrome',

},

// multiCapabilities: [
//     {browserName: 'chrome'},
//     {browserName: 'firefox'}
// ],

onPrepare:  function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
        showstack: false
    }));
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: "./reports/sc",
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        docName: 'CyberBank-Report.html'
    }).getJasmine2Reporter());
},

jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 6000000,
    print:  ()=> {}


},


//test case that we want to run
specs: ['./spec01.js'],

// here is our BDD framework
framework: 'jasmine',


}

//node js is providing run time environment , outside of the environment 