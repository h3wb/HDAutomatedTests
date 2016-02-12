var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Google Search', function()
{
    this.timeout(15000);
    test.it('should work', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    

        driver.get('http://www.google.com');
        var searchBox = driver.findElement(webdriver.By.name('q'));
        driver.wait (function () {
            return driver.isElementPresent(webdriver.By.name('q'));
            }, 10000);
        driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
    
        //searchBox.sendKeys('simple programmer');
        searchBox.getAttribute('value').then(function(value) {
            assert.equal(value, 'simpl programmer');
            });
        driver.quit();
        });
});