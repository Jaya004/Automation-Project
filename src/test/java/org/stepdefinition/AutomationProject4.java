package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject4 extends BaseClass {
	
	AutoProjectPojo a;
	@Given("Click the search icon in appl")
	public void click_the_search_icon_in_appl() {
		a = new AutoProjectPojo();
		clickBtn(a.getSearchBox());
	}

	@When("Find out the Spanish Omelet and Click the icon")
	public void find_out_the_Spanish_Omelet_and_Click_the_icon() throws AWTException {
		a = new AutoProjectPojo();
		passText("Spanish Omelet", a.getEnterTxtSrch());
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
	}

	@And("Select the option by probability")
	public void select_the_option_by_probability() {
		a = new AutoProjectPojo();
		clickBtn(a.getSlctOpt());
	}

	@And("Check the dollar probability")
	public void check_the_dollar_probability() {
		a = new AutoProjectPojo();
		WebElement dollar = driver.findElement(By.xpath("//span[@class='woocommerce-Price-amount amount']"));
		String txt = dollar.getText();
		System.out.println(txt);
	}


}
