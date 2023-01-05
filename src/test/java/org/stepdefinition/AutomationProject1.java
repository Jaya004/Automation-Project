package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.AutoProjectPojo;
import org.samp.BaseClass;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AutomationProject1 extends BaseClass {
	AutoProjectPojo a;
	@Given("To click the Home in Bisto bites application")
	public void to_click_the_Home_in_Bisto_bites_application() {
		a = new AutoProjectPojo();
		clickBtn(a.getClkHome());
		
	}

	@When("To dropdown labeled dosa page")
	public void to_dropdown_labeled_dosa_page() {
		a= new AutoProjectPojo();
		scrollThePage(a.getDosabtn());
	}

	@And("To click the dosa button")
	public void to_click_the_dosa_button() throws InterruptedException {
		Thread.sleep(3000);
		a= new AutoProjectPojo();
		clickBtn(a.getDosabtn());
	}

	@And("Select the masala dosa option")
	public void select_the_masala_dosa_option() throws InterruptedException {
		Thread.sleep(3000);
		a= new AutoProjectPojo();
		clickBtn(a.getMasalaDosaSlt());
	}

	@And("To check the page in available time")
	public void to_check_the_page_in_available_time() throws InterruptedException {
		Thread.sleep(3000);
		WebElement chk = driver.findElement(By.xpath("(//span[text()='Available at 08:00 AM'])[1]"));
		String txt = chk.getText();
		System.out.println(txt);

}
}

