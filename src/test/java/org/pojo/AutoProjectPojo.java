package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.samp.BaseClass;

public class AutoProjectPojo extends BaseClass {
	
	public AutoProjectPojo() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath = "//i[@class='fa fa fa-user']")
	private WebElement accBtn;
	
	@FindBy(name = "phone")
	private WebElement entrPhoneNo;
	
	@FindBy(xpath = "(//input[@type='password'])[1]")
	private WebElement entrPasswrd;
	
	@FindBy(name = "login")
	private WebElement clkLogin;

	@FindBy(id = "menu-item-14249")
	private WebElement clkHome;
	
	@FindBy(xpath = "(//a[@class='lte-item'])[4]")
	private WebElement dosabtn;

	@FindBy(xpath = "//h2[text()='Masala Dosa']")
	private WebElement masalaDosaSlt;

	@FindBy(xpath = "(//input[@type='text'])[4]")
	private WebElement nameBox;
	
	@FindBy(name = "email")
	private WebElement emailBox;
	
	@FindBy(xpath = "(//input[@type='text'])[5]")
	private WebElement phoneBox;
	
	@FindBy(name = "login")
	private WebElement loginBox;
	
	@FindBy(id = "lte-top-search-ico")
	private WebElement searchBox;
	
	@FindBy(xpath = "(//input[@placeholder='Search'])[2]")
	private WebElement enterTxtSrch;
	
	@FindBy(xpath = "//h2[text()='Spanish omelet']")
	private WebElement slctOpt;
	
	@FindBy(id = "menu-item-3557")
	private WebElement storyClk;
	
	
	public WebElement getAccBtn() {
		return accBtn;
	}

	public WebElement getEntrPhoneNo() {
		return entrPhoneNo;
	}

	public WebElement getEntrPasswrd() {
		return entrPasswrd;
	}

	public WebElement getClkLogin() {
		return clkLogin;
	}

	public WebElement getClkHome() {
		return clkHome;
	}

	public WebElement getDosabtn() {
		return dosabtn;
	}

	public WebElement getMasalaDosaSlt() {
		return masalaDosaSlt;
	}

	public WebElement getNameBox() {
		return nameBox;
	}

	public WebElement getEmailBox() {
		return emailBox;
	}

	public WebElement getPhoneBox() {
		return phoneBox;
	}

	public WebElement getLoginBox() {
		return loginBox;
	}

	public WebElement getSearchBox() {
		return searchBox;
	}

	public WebElement getEnterTxtSrch() {
		return enterTxtSrch;
	}

	public WebElement getSlctOpt() {
		return slctOpt;
	}

	public WebElement getStoryClk() {
		return storyClk;
	}

	
}
