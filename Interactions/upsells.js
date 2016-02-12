var webdriver = require('selenium-webdriver');
var gfunction = require ('../Global/g_Functions.js');

module.exports = {
    
   
    clickPinkButton: function  (driver)
    {
        gfunction.clicktarget(driver, '.button--pink');
    }
    
     
    
};
