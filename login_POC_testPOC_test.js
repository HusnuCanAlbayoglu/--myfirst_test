Feature('login ');

Scenario('Yanliş Kullanici Adi  @testcase1',  ({ I }) => {
I.amOnPage('https://www.amazon.com.tr/')
I.waitForElement('//div[@id="nav-flyout-ya-signin')
I.click('//div[@id="nav-flyout-ya-signin"]')
I.waitForElement('//input[@id="ap_email"]')
I.fillField('//input[@id="ap_email"]','ddddd')
I.waitForElement('//input[@id="continue"]')
I.click('//input[@id="continue"]')
I.seeElement ('//*[contains(text(),"Bir sorun oluştu")]')

});

Scenario('Doğru kullanici adi yanliş şifre @testcase2',  ({ I }) => {
    I.amOnPage('https://www.amazon.com.tr/')
    I.waitForElement('//div[@id="nav-flyout-ya-signin')
    I.click('//div[@id="nav-flyout-ya-signin"]')
    I.waitForElement('//input[@id="ap_email"]')
    I.fillField('//input[@id="ap_email"]','husnucanalbayoglu@gmail.com')
    I.waitForElement('//input[@id="continue"]')
    I.click('//input[@id="continue"]')
    I.waitForElement ('//input[@id="ap_password"]')
    I.fillField('//input[@id="ap_password"]','shsshshhs')
    I.waitForElement('//input[@id="signInSubmit"]')
    I.click('//input[@id="signInSubmit"]')
    I.seeElement ('//*[contains(text(),"Bir sorun oluştu")]')
    });
    
