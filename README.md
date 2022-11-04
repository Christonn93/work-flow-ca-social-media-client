# CA | Workflow | Noroff

---
| Github actions | Badge |
| -----------   |  -----------  |
| Unit testing  | [![Automated Unit Testing](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/unit_testing.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/unit_testing.yml)  |
| End to end Testing  | [![Automated E2E Testing](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/e2e_testing.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/e2e_testing.yml) |
| Deploying to github pages | [![Deploy static content to Pages](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/deploy_pages.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/deploy_pages.yml) |
---

## Project installing and running

This project have a lot fo dependencies that need to be setted up. If any if them is failing refer to the [Dependencies](#Dependencies) section of this readme. 


After downloading the zip file run `npm init`, this should start up with installing the dependencies for this project. 


Dependencies used is as follows. 
---

1. [Prettier](https://prettier.io/)
2. [ESlint](https://eslint.org/)
3. [Mrm](https://www.npmjs.com/package/mrm-task-lint-staged)
4. [Jest](https://jestjs.io/)
5. [Babel](https://babeljs.io/)
6. [Cypress](https://www.cypress.io/)

## Information about the project

This project is my delivery for the Course Assignemn in Workflow from Noroff. 
It's ment to **To improve the quality of an existing environment by establishing useful workflows that make the development process more efficient**

The assignemnt is going over how to work inside the terminal, how to plan and setup your own work enviorment. The porject is using github actions to run testing of some part of the code, and deploy the changes made to the code on to [github pages](https://pages.github.com/). 
















### Dependencies

#### Prettier

install prettier as dev dependency

```
npm install --save-dev prettier
```

#### eslint

install eslint as dev

```
npm install eslint --save-dev
```

setup eslint

```
npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Update scripts in package file

```
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
```

#### Mrm

Install Mrm, for pre-commit hooks to run eslint and prettier;

```
npx mrm@2 lint-staged
```

Update package file with tasks

```
"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
```

#### Jest

Install Jest for unit testing.

```
npm i -D jest@29.2.0
```

Update scripts in package

```
"test-unit": "jest"
```

#### eslint jest plugin

Install eslint jest plugin

```
npm i -D eslint-plugin-jest
```

Update eslint configuration

```
{
  "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```

#### Babel

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

add babel.config.json and add configuration

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

#### Cypress

Install Cypress for end to end testing

```
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Updated scripts

```
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
```

Updated eslint config

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```
