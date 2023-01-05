package org.stepdefinition;

import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject2 extends BaseClass {
	
	AutoProjectPojo a;
	@Given("User and on the home page")
	public void user_and_on_the_home_page() {
		a = new AutoProjectPojo();
		clickBtn(a.getClkHome());
	}

	@When("To Click the account button")
	public void to_Click_the_account_button() {
		a = new AutoProjectPojo();
		clickBtn(a.getAccBtn());
	}

	@And("Fill out the registration form with dummy data")
	public void fill_out_the_registration_form_with_dummy_data() {
		a = new AutoProjectPojo();
		passText("John", a.getNameBox());
		passText("seleniuminmakes@gmail.com", a.getEmailBox());
		passText("9354566221", a.getPhoneBox());
	}
	@And("Skip the confirm password text label")
	public void skip_the_confirm_password_text_label() {
		System.out.println("==To Skip The Password==");
	}

	@And("Click the register button")
	public void click_the_register_button() {
		a = new AutoProjectPojo();
		clickBtn(a.getLoginBox());
	}

	@And("Get the pop-up Please fill out the field")
	public void get_the_pop_up_Please_fill_out_the_field() {
		System.out.println("Please fill out the field");
	}



}
