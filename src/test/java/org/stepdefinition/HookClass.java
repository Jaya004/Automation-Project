package org.stepdefinition;

import org.samp.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass extends BaseClass {
	
	@Before
	public void precondition() {
		System.out.println("==Start The Browser==");
		launchBrowser();
		windowMaximize();
		launchUrl("https://bistrobitesdc.com/");
	}

	@After
	public void postcondition() {
		closeEntireBrowser();
		System.out.println("==Close The Browser==");
	}
}
