# Cypress Fixtures E2E Automation (Automation Exercise Site)

## Overview
This project is an **end-to-end automation testing suite** built using **Cypress** with **fixtures** for test data management.  
It automates the **user registration flow** on [AutomationExercise](https://automationexercise.com/) - from visiting the site to filling out the signup form, entering personal details and verifying successful account creation.

The objective of this project is to demonstrate **data-driven testing** using Cypress fixtures, focusing on test reliability, structure and practical QA automation skills.

---

## Test Scenario Covered

**Signup Flow**
1. Navigate to [automationexercise.com](https://automationexercise.com/)
2. Click on **Signup / Login**
3. Enter a **new user’s name and email** from fixture data
4. Fill in:
   - Title (Mr/Mrs)
   - Password
   - Date of Birth (Day, Month, Year)
   - Newsletter and Offers checkboxes
5. Fill the **Address Information** section:
   - First Name, Last Name, Company, Address, Country, State, City, Zipcode, and Mobile Number
6. Click **Create Account**
7. Verify the success message “Account Created!”
8. Click **Continue** and confirm navigation to the user’s home page

---

## Tech Stack

| Component | Description |
|------------|-------------|
| **Framework** | Cypress |
| **Language** | JavaScript (ES6) |
| **Test Data** | Cypress Fixtures (JSON) |
| **Browser** | Chrome (default) |

---

## Step-by-Step Setup

### 1️⃣ Create Project Folder
```bash
mkdir Cypress_Fixtures_E2E_Automation_NL_QA
cd Cypress_Fixtures_E2E_Automation_NL_QA
````

### 2️⃣ Initialize Node.js

```bash
npm init -y
```

### 3️⃣ Install Cypress and Required Packages

```bash
npm install cypress cypress-xpath --save-dev
```

### 4️⃣ Open Cypress for the First Time

```bash
npx cypress open
```

This will create a default **cypress/** folder with `e2e`, `fixtures`, and `support` directories.

---

## Folder Structure

```
Cypress_Fixtures_E2E_Automation_NL_QA/
│
├── cypress/
│   ├── e2e/
│   │   └── signupTest.cy.js             # Test case file (contains your signup automation)
│   ├── fixtures/
│   │   └── signupUsers.json             # Fixture file containing test data
│   ├── support/
│       └── e2e.js                       # Support commands or configurations
│
├── cypress.config.js                    # Cypress configuration file
├── package.json                         # Project dependencies and scripts
└── README.md                            # Project documentation
```

---

## Example Fixture File (signupUsers.json)

```json
{
  "newUser": {
    "title": "Mr",
    "name": "John Doe",
    "email": "john.doe123@gmail.com",
    "password": "Test@123",
    "dob": { "day": "12", "month": "May", "year": "1998" },
    "newsletter": true,
    "specialOffers": true,
    "address": {
      "firstName": "John",
      "lastName": "Doe",
      "company": "ABC Corp",
      "address1": "123 Street",
      "address2": "Apartment 45",
      "country": "India",
      "state": "Tamil Nadu",
      "city": "Chennai",
      "zipcode": "600001",
      "mobile": "9876543210"
    }
  }
}
```

---

## Run the Tests

### Option 1 - Using Cypress Test Runner (GUI)

```bash
npx cypress open
```

Select your test file `signupTest.cy.js` and run it.

### Option 2 - Headless Mode (CLI)

```bash
npx cypress run
```

---
