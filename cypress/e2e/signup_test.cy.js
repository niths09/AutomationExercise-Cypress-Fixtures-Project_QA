import { should } from "chai"
import { timeout } from "rxjs"

describe('Automation Exercise Signup Test', () => {

  it('Sign up a new user using fixture data', () => {

    //Load fixture
    cy.fixture('signupUsers').then((users) => {

      const user = users.newUser

      //Visit website
      cy.visit('https://automationexercise.com/')
      cy.wait(3000)

      //Click Signup/Login
      cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a', { timeout: 10000 }).should('be.visible').click()
      cy.wait(2000)

      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[2]', { timeout: 10000 }).should('be.visible').type(user.name)
      cy.wait(2000)

      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/input[3]', { timeout: 10000 }).should('be.visible').type(user.email)
      cy.wait(2000)

      cy.xpath('//*[@id="form"]/div/div/div[3]/div/form/button', { timeout: 10000 }).should('be.visible').click()
      cy.wait(2000)

      //Select Title
      if(user.title === "Mr") {   //=== ensures both the value and type match exactly before executing the if block.
        cy.xpath('//*[@id="id_gender1"]', { timeout: 10000 }).should('be.visible').check()
      } else {
        cy.xpath('//*[@id="id_gender1"]', { timeout: 10000 }).should('be.visible').check()
      }
      cy.wait(2000)

      //Type Password
      cy.xpath('//*[@id="password"]', { timeout: 10000 }).should('be.visible').type(user.password)
      cy.wait(2000)

      //Select Date of Birth
      cy.xpath('//*[@id="days"]', { timeout: 10000 }).should('be.visible').select(user.dob.day)
      cy.wait(2000)
      cy.xpath('//*[@id="months"]', { timeout: 10000 }).should('be.visible').select(user.dob.month)
      cy.wait(2000)
      cy.xpath('//*[@id="years"]', { timeout: 10000 }).should('be.visible').select(user.dob.year)
      cy.wait(2000)

      //Check the Newsletter checkbox
      if(user.newsletter) cy.xpath('//*[@id="newsletter"]', { timeout: 10000 }).should('be.visible').check()
       
      //Check the Offers checkbox
      if(user.specialOffers) cy.xpath('//*[@id="optin"]', { timeout: 10000 }).should('be.visible').check()

      //Enter address details in the field
      cy.xpath('//*[@id="first_name"]', { timeout: 10000 }).should('be.visible').type(user.address.firstName)
      cy.wait(2000)

      cy.xpath('//*[@id="last_name"]', { timeout: 10000 }).should('be.visible').type(user.address.lastName)
      cy.wait(2000)

      cy.xpath('//*[@id="company"]', { timeout: 10000 }).should('be.visible').type(user.address.company)
      cy.wait(2000)

      cy.xpath('//*[@id="address1"]', { timeout: 10000 }).should('be.visible').type(user.address.address1)
      cy.wait(2000)

      cy.xpath('//*[@id="address2"]', { timeout: 10000 }).should('be.visible').type(user.address.address2)
      cy.wait(2000)

      cy.xpath('//*[@id="country"]', { timeout: 10000 }).should('be.visible').select(user.address.country)
      cy.wait(2000)

      cy.xpath('//*[@id="state"]', { timeout: 10000 }).should('be.visible').type(user.address.state)
      cy.wait(2000)

      cy.xpath('//*[@id="city"]', { timeout: 10000 }).should('be.visible').type(user.address.city)
      cy.wait(2000)

      cy.xpath('//*[@id="zipcode"]', { timeout: 10000 }).should('be.visible').type(user.address.zipcode)
      cy.wait(2000)

      cy.xpath('//*[@id="mobile_number"]', { timeout: 10000 }).should('be.visible').type(user.address.mobile)
      cy.wait(2000)

      // Click Create Account
      cy.xpath('//*[@id="form"]/div/div/div/div/form/button', { timeout: 10000 }).should('be.visible').click()
      cy.wait(2000)

      //Verify success message
      cy.contains('Account Created!').should('be.visible')
      cy.wait(5000)

      // Click continue button
      cy.xpath('//*[@id="form"]/div/div/div/div/a', { timeout: 10000 }).should('be.visible').click()
      cy.wait(5000)
    })
  })
})