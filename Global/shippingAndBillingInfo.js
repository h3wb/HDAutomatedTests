var webdriver = require('selenium-webdriver');

module.exports = {
    
   
    textEmail: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.Email"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.Email"]')).sendKeys("test@test.com");
    },
    
    textPhoneNumber: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.Phone"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.Phone"]')).sendKeys("5123334444");
    },
    
    textShipName: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipName"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipName"]')).sendKeys("Test");
    },
    
    textUSShipAddress: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipAddress"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipAddress"]')).sendKeys("111 Test Way");
    },
    
    textUSShipCity: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipCity"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipCity"]')).sendKeys("Austin");
    },
    
    textShipState: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipState"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipState"]')).value('Tx');
    },
    
    textShipZip: function  (driver)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css('input[ng-model="ci.model.ShipZip"]'));
            }, 10000);
        driver.findElement(webdriver.By.css('input[ng-model="ci.model.ShipZip"]')).sendKeys("78681");
    }
};
