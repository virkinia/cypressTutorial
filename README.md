# TutorialCypress

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Create Angular project with Cypress and Cucumber

1. Create angular project: ``` ng new tutorialCypress ```
2. Install Cypress: ``` npm i cypress --save-dev ```
   * Launch cypress (npm > 5.4): ``` npx cypress open ```
   * Now we can see a new folder called cypress in our project.
   * Add cypress script to packaje.json : ```  "scripts": {
    "cypress:open": "cypress open" } ```

3. Install Cucumber-cypress-preprocessor:
   * npm install --save-dev cypress-cucumber-preprocessor
   * Add below lines in cypress/plugins/index.js:    
      ``` const cucumber = require('cypress-cucumber-preprocessor').default ```
      ``` module.exports = (on, config) => { on('file:preprocessor', cucumber())} ```
   * Add below line in packaje.json:  
      ```"cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true }```

## Add Material to create a simple form

1. ```ng add @angular/material```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
