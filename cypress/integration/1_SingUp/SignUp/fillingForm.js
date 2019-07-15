import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:4200';

Given(`I am in signUp page`, () => {
  cy.visit(url);
  cy.url().should('eq', url + '/');
});
And(`I filling in email {string}`, value => {
  cy.get(`input[formcontrolname=email]`)
    .clear()
    .type(value);
});
And(`I filling in name {string}`, value => {
  cy.get(`input[formcontrolname=name]`)
    .clear()
    .type(value);
});
And(`I filling in description {string}`, value => {
  cy.get(`input[formcontrolname=description]`)
    .clear()
    .type(value);
});
And(`I filling in password {string}`, value => {
  cy.get(`input[formcontrolname=password]`)
    .clear()
    .type(value);
});

When('I click submit', () => {
  cy.get('div[class=form-element] > button').click();
});

Then(`I see as result a json {string}, {string} y {string}`, (email, name, password) => {
  cy.get('[data-cy=result]').contains(email);
  cy.get('[data-cy=result]').contains(name);
  cy.get('[data-cy=result]').contains(password);
});
