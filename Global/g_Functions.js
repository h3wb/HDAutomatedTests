var webdriver = require('selenium-webdriver');

module.exports = {
    
   
    insertText: function  (driver, selector, input)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css(selector));
            }, 10000);
        driver.findElement(webdriver.By.css(selector)).sendKeys(input);
    },
    
     clicktarget: function  (driver, selector)
    {
       driver.wait (function () {
            return driver.isElementPresent(webdriver.By.css(selector));
            }, 10000);
        driver.findElement(webdriver.By.css(selector)).click();
    }
        
};
