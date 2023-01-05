package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject3 extends BaseClass {
	
	AutoProjectPojo a;
	@Given("Click the search icon")
	public void click_the_search_icon() {
		a = new AutoProjectPojo();
		clickBtn(a.getSearchBox());
		passText("Coke", a.getEnterTxtSrch());
	}

	@When("To search Coke and check the can dollar is $ {double}")
	public void to_search_Coke_and_check_the_can_dollar_is_$(Double double1) throws AWTException {
		a = new AutoProjectPojo();
		Robot r = new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		WebElement price = driver.findElement(By.xpath("(//span[@class='woocommerce-Price-amount amount'])[1]"));
		String txt = price.getText();
		System.out.println(txt);
	}

}
