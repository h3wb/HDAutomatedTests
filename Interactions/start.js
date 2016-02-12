var webdriver = require('selenium-webdriver');
var gfunction = require ('../Global/g_Functions.js');

module.exports = {
    
   
    clickPinkButton: function  (driver)
    {
        gfunction.clicktarget(driver, '.button--pink');
    },
    
    waitForLoadingIndicatorToHide: function (driver)
    {
        driver.wait (function()
        {
            return driver.isElementPresent(webdriver.By.css('.loading-indicator.maindiv.ng-hide'));
        }, 10000);
        
    }    
    
};
