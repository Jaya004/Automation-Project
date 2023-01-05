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
  "status": "passed"
});
formatter.step({
  "name": "To dropdown labeled dosa page",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject1.to_dropdown_labeled_dosa_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the dosa button",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.to_click_the_dosa_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the masala dosa option",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.select_the_masala_dosa_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check the page in available time",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject1.to_check_the_page_in_available_time()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Check the dollar probability",
  "keyword": "And "
});
formatter.match({
  "location": "AutomationProject4.check_the_dollar_probability()"
});
formatter.result({
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Check the spelling mistake",
  "keyword": "When "
});
formatter.match({
  "location": "AutomationProject5.check_the_spelling_mistake()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});