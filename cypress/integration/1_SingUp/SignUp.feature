Feature: SignUp

  I want to signUp as a new user

  Scenario: Flling in the form with a new user
    Given I am in signUp page
    And I filling in email "usuario1@prueba.com"
    And I filling in name "Ruperto"
    And I filling in password "123456kA"
    And I filling in description "Uno, dos"
    When I click submit
    Then I see as result a json "usuario1@prueba.com", "Ruperto" y "123456kA"

