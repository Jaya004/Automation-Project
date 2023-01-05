package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject5 extends BaseClass{
	
	AutoProjectPojo a;
	@Given("Click the our story option appl")
	public void click_the_our_story_option_appl() throws InterruptedException {
		Thread.sleep(3000);
		a = new AutoProjectPojo();
		clickBtn(a.getStoryClk());
	}

	@When("Check the spelling mistake")
	public void check_the_spelling_mistake() {
		a = new AutoProjectPojo();
		WebElement spel = driver.findElement(By.xpath("(//p[@style='text-align:justify;'])[2]"));
		String txt = spel.getText();
		System.out.println(txt);
	}

}
