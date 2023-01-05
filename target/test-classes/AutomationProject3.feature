@Feature2
Feature:

Scenario: The user fills out the registration form and ignores the confirm password
Given User and on the home page
When To Click the account button
And Fill out the registration form with dummy data
And Skip the confirm password text label
And Click the register button
And Get the pop-up Please fill out the field