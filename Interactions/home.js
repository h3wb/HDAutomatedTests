var assert = require('assert');
var webdriver = require('selenium-webdriver');
var gfunction = require ('../Global/g_Functions.js');

module.exports = {
    clickGetStarted: function  (driver)
    {
        gfunction.clicktarget(driver,'.button--pink');
     },
    
    checkPromoBar: function (driver)
    {
        driver.findElement(webdriver.By.css('.promo-bar__promo--small'))
        .getAttribute('value').then(function (value) {
        assert.equal(value,'promo-details');
        });
            
       
    }
    
};




