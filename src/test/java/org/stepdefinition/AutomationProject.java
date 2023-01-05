package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject extends BaseClass{
	
	AutoProjectPojo a;
	
	@Given("To click the Account button")
	public void to_click_the_Account_button() {
		a = new AutoProjectPojo();
		clickBtn(a.getAccBtn());
	}

	@When("To enter wrong Username and Password")
	public void to_enter_wrong_Username_and_Password() {
		a = new AutoProjectPojo();
		passText("8144244383", a.getEntrPhoneNo());
		passText("Jaya@123", a.getEntrPasswrd());
	}

	@When("To click the login button")
	public void to_click_the_login_button() {
		a = new AutoProjectPojo();
		clickBtn(a.getClkLogin());
		
		
	}

	@When("To check the output invalid Mobile No")
	public void to_check_the_output_invalid_Mobile_No() {
		WebElement error = driver.findElement(By.xpath("//ul[@class='woocommerce-error']"));
		String txt = error.getText();
		System.out.println(txt);
				
	}

	
}
