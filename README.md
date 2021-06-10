# Cypress cucumber boilarplate

The **cypress cucumber boilarplate** uses: 
typescript, cypress-cucumber-preprocessor, cypress testing-library, cypress-iframe, multiple-cucumber-html-reporter.

## Get started

### Installation

Install by running:

```shell
npm install
```

rename "cypress.env.example.json" to "cypress.env.json" and add your credentials

## To run tests

To run tests headless:
```shell
npm run cy
```

To run tests with UI:
```shell
npm run cy:open
```

To run tests with tags:
```shell
npm run cy:tags TAGS='@smoke'
```

To generate html report:
```shell
npm run cy:report
```

