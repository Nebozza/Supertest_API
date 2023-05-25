**Custom API framework using JS language base**

The example starter project for API test framework written in JS Mocha in a Babel toolchain. Applications Under test will be https://gorest.co.in/ and https://deckofcardsapi.com/

# Project installation

1. Clone the git repository - https://bitbucket.org/nebozza/api_tests/src/master/
2. Run “npm install”

# Running tests

  ## Local run
  1. In VSC terminal run: "npm run test"

    Results: This run will trigger all tests and display logs and results in the console.

  2. In VSC terminal run: "npm run test-reporter"

    Results: This run will trigger all tests and create mochawesome report file with html export of the test run.

# Project structure

1. API_TEST/config -> In this folder we will keep the URL configs/endpoint that we will hit with the tests and custom common functions that will be used in the tests:
    - common.js: common operations/functions that generate custom outputs, which can be used in the test files and/or helper/config files
    - setupCards/setupUsers.js: initial setup where the request is created using the supertest object
    - url_config.js: URL config file, where all needed endpoint URLs are stored
2. API_TEST/test -> In this folder we will keep tests
    - helper folder: This folder can store as many helper files as needed, that will contain functions or any other objects needed for the tests (in the example custom JSON payloads are stored in this helper)
3. API_TEST/mochawesome-report -> In this folder we will keep the reports in the HTML fromat      

# TOKEN creation

In order to bind the token bearer with the tests, every user needs to go to the following link: https://gorest.co.in/consumer/login and log in to the site. The next step will prompt for access token, that needs to be copied and pasted in a .env file in the frameworks space in teh following fashion:
USER_TOKEN = your token pasted here

# How the tests are structured

Supertest (https://www.npmjs.com/package/supertest) offer coverage of all types of HTTP requests, where in a three line code module you can create/send custom HTTP request to predifined URL endpoint. The used example in the tests (const res) holds the logic of storing the request in a constant/variable, and handling that constant with all needed assertions, given the requrements in your project. 
Await operator generated request is controled by the HTTP method (get, post, put...) that expects empty string or path string to enhance or redirect the original stored URL handled by supertest, that is followed up by setter method, which sets the authorization header (API key) according to your project requirements (bearer token, query parameter, x-api-key, etc).
The third line in request is the send method that expects the payload that needs to be send via the custom HTTP request, which is stored in the separate helper folder, under test folder.
The exploit of the constant stored request can vary and can be done in multiple ways, where all assets within the response (JSON) can be verified using mocha/chai assertions. Examples use the chai assertions to verify status codes, entire payloads, lines in the response, etc. 
You can follow the same method and have some fun with your project's APIs!!!

# Signature

The TCMK - DEPT® testing team:
1. Ana Gjorova
2. Ena Stankova
3. Ivica Jovanovski
4. Katerina Gjorgjievska
5. Nebojsha Stamenkov
6. Nikola Karajanov
7. Zoran Jakjimoski

# Liscence

Just enjoy it! 