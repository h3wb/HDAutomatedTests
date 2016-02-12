var home = require ('../Interactions/home');
var start = require ('../Interactions/start');
var upload = require ('../Interactions/upload');
var crop = require ('../Interactions/crop');
var upsells = require ('../Interactions/upsells');
var cart = require ('../Interactions/cart');
var customerInfo = require('../Interactions/customerInfo');
//var assert = require('assert'),
//test = require('selenium-webdriver/testing'),
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.firefox()).
   build();

// test.describe('Happy Path', function()
// {
//     this.timeout(15000);
//     test.it('should work', function() {
//     
    
//Home
    driver.get('http://m.easycanvasprints.com');
    home.clickGetStarted(driver);
//home.checkPromoBar(driver, assert);

//Singlecanvasdesigner#/start
    start.clickPinkButton(driver);

//Upload
    upload.nativeUpload(driver);

//Uploaded Image
    start.waitForLoadingIndicatorToHide(driver);
    start.clickPinkButton(driver);
 
//Crop
    crop.clickPinkButton(driver);
 
//Upsells
    upsells.clickPinkButton(driver);
 
//Cart
    cart.clickCheckout(driver);
 
//Customer Info
    customerInfo.insertEmail(driver);
    customerInfo.insertPhoneNumber(driver);
    customerInfo.insertShipName(driver);
    customerInfo.insertUSShipAddress(driver);
    customerInfo.insertUSShipCity(driver);
    //customerInfo.selectShipState(driver);
    customerInfo.insertShipZip(driver);
    customerInfo.clickPinkButton(driver);
 
 


driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();
// });
// });


