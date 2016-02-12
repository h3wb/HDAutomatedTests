var webdriver = require('selenium-webdriver');
var gfunction = require ('../Global/g_Functions.js');

module.exports = {
    
   
    clickCheckout: function  (driver)
    {
       gfunction.clicktarget(driver, '.button--full.vert-margin.button--pink');
    },
       
};
