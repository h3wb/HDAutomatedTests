var webdriver = require('selenium-webdriver');
var gfunction = require ('../Global/g_Functions.js');

module.exports = {
    
   
    clickPinkButton: function  (driver)
    {
       gfunction.clicktarget(driver, '.button.button--pink.button--full');
    },
    
    insertEmail: function (driver)
    {
        gfunction.insertText(driver, 'input[ng-model="ci.model.Email"]', "test@test.com" )
    },
    
    insertPhoneNumber: function  (driver)
    {
       gfunction.insertText(driver, 'input[ng-model="ci.model.Phone"]', "5123334444")
    },
    
    insertShipName: function  (driver)
    {
       gfunction.insertText(driver, 'input[ng-model="ci.model.ShipName"]', "Test")
     },
    
    insertUSShipAddress: function  (driver)
    {
       gfunction.insertText(driver, 'input[ng-model="ci.model.ShipAddress"]', "111 Test Way")
    },
    
    insertUSShipCity: function  (driver)
    {
       gfunction.insertText(driver, 'input[ng-model="ci.model.ShipCity"]', "Austin")
    },
    
    selectShipState: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipState"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipState"]')).value('Tx');
    },
    
    insertShipZip: function  (driver)
    {
       gfunction.insertText(driver, 'input[ng-model="ci.model.ShipZip"]', "78681")
    }
    
};
