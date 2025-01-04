# 🌟 **IT Quality Assurance - Assignment Repository** 🌟

Welcome to the **IT Quality Assurance (ITQA)** assignment repository! This project showcases advanced **UI and API testing** using **Cypress** and **Cucumber**, ensuring quality and maintainability in software development.

---

## **📜 Table of Contents**
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Commands](#commands)
  - [Cypress Commands](#cypress-commands)
  - [Allure Reporting Commands](#allure-reporting-commands)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)

---

## **🔍 Project Overview**

This project aims to demonstrate the following:

1. **UI Testing**: Automating end-to-end scenarios for a web application.
2. **API Testing**: Validating API functionality, performance, and edge cases.

**Tools Used:**  
- **Cypress** for test execution.  
- **Cucumber** for writing Gherkin-style test cases.  

### **Why This Project Matters?**  
- Ensures consistent and reliable software quality.  
- Promotes behavior-driven development (BDD) for better team collaboration.  

---

## **🛠️ Technologies Used**

| Technology                       | Purpose                                               |
|----------------------------------|-------------------------------------------------------|
| **[Cypress](https://www.cypress.io/)** | Fast, reliable end-to-end testing.                      |
| **[Cucumber](https://cucumber.io/)**   | Behavior-driven development with Gherkin syntax.        |
| **Node.js**                      | Environment setup and dependency management.          |
| **JavaScript**        | Writing maintainable and scalable test scripts.       |

---

## **🚀 Setup and Installation**

Follow these steps to get started:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Team-Infolinx/itqa-assignment-group39.git
   cd itqa-assignment-group39
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run Cypress tests:**
   ```bash
   npx cypress open
   ```
---

## **📚 Commands**

#### **Cypress Commands**

1. **Open the Cypress Test Runner:**
   ```bash
   npx cypress open
   ```
2. **Run tests in headless mode:**
   ```bash
   npx cypress run
   ```

#### **Allure Reporting Commands**

1. **Execute tests with Allure reporter:**
   ```bash
   npx cypress run --reporter mocha-allure-reporter --reporter-options allureResults=allure-results
   ```
2. **Generate Allure report:**
   ```bash
   allure generate allure-results --clean
   ```
3. **Open Allure report:**
   ```bash
   allure open allure-report
   ```

---

## **📂 Directory Structure**

```plaintext
itqa-assignment-group39/
├── cypress/
│   ├── e2e/                     # Feature files and step definitions
│   ├── fixtures/                # Test data files
│   ├── screenshots/             # Automatically generated test failure screenshots
│   └── support/                 # Custom Cypress commands and utilities
├── allure-results/              # Allure test results
├── allure-report/               # Generated Allure reports
├── node_modules/                # Installed dependencies
├── cypress.config.js            # Cypress configuration file
└── package.json                 # Project metadata and dependencies
```

---

## **👥 Contributors**

| Index                       | Name                                               | 
|-----------------------------|----------------------------------------------------|
| 204042N                     | Dinusha K.M                                        |
| 204113J                     | Lakshan K.A.D                                      |
| 204129M                     | Meegoda S.Y                                        |
| 204189U                     | Sanjaya B.H                                        |
| 204191T                     | Sankalapani D.J.M.R                                |
| 204197R                     | Senevirathne Y.M.N.N                               |

---

## **🎯 Key Highlights**

- **Seamless Integration:** Combines UI and API testing for full-stack quality assurance.
- **Scalable:** Written in modern, scalable tools like **Cypress** and **Cucumber**, ensuring maintainability and flexibility for future enhancements.
- **Actionable Reports:** Leverages **Allure** for generating detailed, interactive test reports that provide insights into test results and failures.

---

Happy Testing! 🎉
