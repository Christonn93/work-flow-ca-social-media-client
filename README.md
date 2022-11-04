# CA | Workflow | Noroff

[![Automated Unit Testing](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/unit_testing.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/unit_testing.yml)
[![Automated E2E Testing](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/e2e_testing.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/e2e_testing.yml)
[![Deploy static content to Pages](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/deploy_pages.yml/badge.svg?branch=workflow-ca)](https://github.com/Christonn93/work-flow-ca-social-media-client/actions/workflows/deploy_pages.yml)


## Information about the project

This project is my delivery for the Course Assignemn in Workflow from Noroff. 
It's ment **to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient**

The assignemnt is going over how to work inside the terminal, how to plan and setup your own work enviorment. The porject is using github actions to run testing of some part of the code, and deploy the changes made to the code on to [github pages](https://pages.github.com/). 

The code in the project repository is **forked** from a teachers repository and is ment to be illustrating how the student's could have created the cousre assignment from javascript 2. 

The project itself is a sosial media platfrom that is using Noroff's API. You can create posts, read other's posts and interact with other user's.

---

## Project installing and running

This project have a lot fo dependencies that need to be setted up. If any if them is failing refer to the [Dependencies](#Dependencies) section of this readme. 


After downloading the zip file run `npm init`, this should start up with installing the dependencies for this project. 

If the style is not showing up, make sure to run `npm run build`. This will run the build script to create css from scss files. 
When workign with the project and doing styyle changes, its recommended to run `npm run start`. This will run a script that is watching the changes that is done and applays them on save of the file. 


Dependencies used is as follows. 
---

1. [Prettier](https://prettier.io/) - An opinionated code formatter
2. [ESlint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.
3. [Mrm](https://www.npmjs.com/package/mrm-task-lint-staged) - This tasks will try to infer extensions from your npm scripts
4. [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
5. [Babel](https://babeljs.io/) - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
6. [Cypress](https://www.cypress.io/) - Cypress is the new standard in front-end testing that every developer and QA engineer needs.
7. [Bootstrap](https://npm.io/package/bootstrap) - Powerful, extensible, and feature-packed frontend toolkit. 
8. [SASS](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. 

Github actions that is setted up
---

1. Deploying to github pages
2. Running end to end testing
3. Running unit testing


### Dependencies

The following list is describing how to install and congifure the different dependencies used in this project. If there is any dependencies that is breaking, please refere to this section and install them again. 

#### Bootstrap

Installing Bootstrap

```
npm i bootstrap
```

#### SASS/SCSS

Installing SCSS
```
npm i scss
```

#### Prettier

Install prettier as dev dependency

```
npm install --save-dev prettier
```

> [Link to page](https://npm.io/package/prettier)

#### ESlint

Install eslint as dev

```
npm install eslint --save-dev
```

ESlint setup

```
npx eslint --init
```

In the command line you will choose these options:
```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Updated package.json scripts

```json
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
```

> [Link to page](https://npm.io/package/eslint)

#### Mrm

Install Mrm, for pre-commit hooks to run eslint and prettier

```
npx mrm@2 lint-staged
```

Updated package.json tasks

```json
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
> [Link to page](https://npm.io/package/mrm)


#### Jest

Install Jest for unit testing

```
npm i -D jest@29.2.0
```

Updated package.json scripts

```json
"test-unit": "jest"
```
> [Link to page](https://npm.io/package/jest)


#### ESlint Jest plugin

Install eslint jest plugin

```
npm i -D eslint-plugin-jest
```

Update eslint configuration

```json
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
> [Link to page](https://npm.io/package/eslint-plugin-jest)

#### Babel

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Add babel.config.json and add configuration

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```
> [Link to page](https://npm.io/package/babel-npm-install)


#### Cypress

Install Cypress for end to end testing

```
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Updated package.json scripts

```json
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
```

Updated eslint config

```json
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
> [Link to page](https://npm.io/package/eslint-plugin-cypress)
