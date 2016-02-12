var webdriver = require('selenium-webdriver');

module.exports = {
    nativeUpload: function  (driver)
    {
     driver.wait(function () {
     return driver.isElementPresent(webdriver.By.css('input[type="file"]'));
     }, 10000);
        
     var upload = driver.findElement(webdriver.By.css('input[type="file"]'));upload.sendKeys("C:\\cake.jpeg");
    }
    
};
