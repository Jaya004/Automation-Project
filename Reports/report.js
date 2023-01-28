$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AutomationProject1.feature");
formatter.feature({
  "name": "To validate the login functionality in Bisto bites application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.scenario({
  "name": "To validate the login invalid “User name” and “password”",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To click the Account button",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject.to_click_the_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter wrong Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject.to_enter_wrong_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check the output invalid Mobile No",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject.to_check_the_output_invalid_Mobile_No()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AutomationProject2.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.scenario({
  "name": "The User successfully add the Dosa",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To click the Home in Bisto bites application",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject1.to_click_the_Home_in_Bisto_bites_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cli id\u003d\"menu-item-14249\" class\u003d\"menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item current-menu-ancestor current-menu-parent menu-item-14249\"\u003e...\u003c/li\u003e is not clickable at point (273, 49). Other element would receive the click: \u003cdiv id\u003d\"lte-preloader\" data-loader\u003d\"Loading...\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d109.0.5414.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GANESH\u0027, ip: \u0027192.168.205.40\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.75, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Windows\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49873}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b4f7153e231eb2a66ffffe15f26f7774\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat org.samp.BaseClass.clickBtn(BaseClass.java:62)\r\n\tat org.stepdefinition.AutomationProject1.to_click_the_Home_in_Bisto_bites_application(AutomationProject1.java:17)\r\n\tat ✽.To click the Home in Bisto bites application(src/test/resources/AutomationProject2.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To dropdown labeled dosa page",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject1.to_dropdown_labeled_dosa_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To click the dosa button",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.to_click_the_dosa_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Select the masala dosa option",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.select_the_masala_dosa_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To check the page in available time",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.to_check_the_page_in_available_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AutomationProject3.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "The user fills out the registration form and ignores the confirm password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User and on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject2.user_and_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the account button",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject2.to_Click_the_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill out the registration form with dummy data",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject2.fill_out_the_registration_form_with_dummy_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Skip the confirm password text label",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject2.skip_the_confirm_password_text_label()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the register button",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject2.click_the_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get the pop-up Please fill out the field",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject2.get_the_pop_up_Please_fill_out_the_field()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AutomationProject4.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature3"
    }
  ]
});
formatter.scenario({
  "name": "The user search for the “Coke” can and check the price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the search icon",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject3.click_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To search Coke and check the can dollar is $ 1.50",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject3.to_search_Coke_and_check_the_can_dollar_is_$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AutomationProject5.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature4"
    }
  ]
});
formatter.scenario({
  "name": "The user selects the Spanish Omelet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the search icon in appl",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject4.click_the_search_icon_in_appl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Find out the Spanish Omelet and Click the icon",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject4.find_out_the_Spanish_Omelet_and_Click_the_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the option by probability",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject4.select_the_option_by_probability()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d109.0.5414.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GANESH\u0027, ip: \u0027192.168.205.40\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.75, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Windows\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49972}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 284f448a065a4ae950d2c7fe7b07233d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat org.samp.BaseClass.clickBtn(BaseClass.java:62)\r\n\tat org.stepdefinition.AutomationProject4.select_the_option_by_probability(AutomationProject4.java:37)\r\n\tat ✽.Select the option by probability(src/test/resources/AutomationProject5.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Check the dollar probability",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject4.check_the_dollar_probability()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/AutomationProject6.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature5"
    }
  ]
});
formatter.scenario({
  "name": "The user read our story",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click the our story option appl",
  "keyword": "Given "
});
formatter.match({
  "location": "AutomationProject5.click_the_our_story_option_appl()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cli id\u003d\"menu-item-3557\" class\u003d\"menu-item menu-item-type-custom menu-item-object-custom  menu-item-3557\"\u003e...\u003c/li\u003e is not clickable at point (442, 49). Other element would receive the click: \u003cdiv id\u003d\"lte-preloader\" data-loader\u003d\"Loading...\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d109.0.5414.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GANESH\u0027, ip: \u0027192.168.205.40\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.75, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Windows\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:50015}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b9cc9ad6b20b8f412067a233daf803e8\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat org.samp.BaseClass.clickBtn(BaseClass.java:62)\r\n\tat org.stepdefinition.AutomationProject5.click_the_our_story_option_appl(AutomationProject5.java:18)\r\n\tat ✽.Click the our story option appl(src/test/resources/AutomationProject6.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Check the spelling mistake",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject5.check_the_spelling_mistake()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});