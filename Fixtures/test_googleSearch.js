var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
  'browserName' : 'firefox' 
  
}

var driver = new webdriver.Builder().
  usingServer().
  withCapabilities(capabilities).
  build();

driver.get('http://m.easycanvasprints.com');
 driver.findElement(webdriver.By.css('.button--red')).click();
 driver.findElement(webdriver.By.css('.button--pink ')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();