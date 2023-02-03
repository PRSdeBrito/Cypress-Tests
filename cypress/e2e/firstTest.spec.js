/// <reference types="cypress" />

import { onHomePage }  from "../support/page_objects/homePage"
import { onElementsPage } from "../support/page_objects/elementsPage"
import { onFormsPage } from "../support/page_objects/formsPage"

describe('Elements Page tests', () => {

    beforeEach('open main website', () => {
        cy.visit('https://demoqa.com/')
    })

    let fullname = "Stewart Griffin"
    let email = "Stew@griff.in"
    let address = "Cheesecake Avenue 5 \n Sugartonville"
    let name = "Stewart"
    let lastname = "Griffin"
    let age = "99"
    let salary = "100000"
    let dept = "IT dept"

    it('Opens Text Box Page, fills in text boxes and submits information', () => {
        onHomePage.openElementsPage()
        onElementsPage.openTextBoxPage()
        onElementsPage.fillInTextBox(fullname, email, address)
        onElementsPage.clickTextBoxSubmitButton()
        onElementsPage.verifyTextBoxSubmitSuccessful(fullname, email, address)
    })

    it('Opens Check Box Page and ticks in all checkboxes', () => {
        onHomePage.openElementsPage()
        onElementsPage.openCheckBoxPage()
        onElementsPage.tickCheckBoxHome()
        onElementsPage.confirmTickCheckBoxHome()
    })

    it('Opens Check Box Page and expands the Home Tree', () => {
        onHomePage.openElementsPage()
        onElementsPage.openCheckBoxPage()
        onElementsPage.expandHomeCheckBox()
        onElementsPage.verifyExpandHomeCheckBox()
    })

    it('Opens Check Box Page and expands all', () => {
        onHomePage.openElementsPage()
        onElementsPage.openCheckBoxPage()
        onElementsPage.clickExpandAllCheckboxes()
        onElementsPage.verifyClickExpandAllCheckoxes()
    })

    it('Opens Radio Button Page and selects Yes and then Impressive', () => {
        onHomePage.openElementsPage()
        onElementsPage.openRadioButtonPage()
        onElementsPage.selectYesRadioButton()
        onElementsPage.verifySelectYesRadioButton()
        onElementsPage.selectImpressiveRadioButton()
        onElementsPage.verifySelectImpressiveRadioButton()
    })

    it('Opens Web Tables Page and checks for table with default 3 entries', () => {
        onHomePage.openElementsPage()
        onElementsPage.openWebTablesPage()
        onElementsPage.verifyWebTablesDefaultEntriesAmount()
    })

    it('Opens Web Tables Page and adds 1 entry and checks table for 4 entries', () => {
        onHomePage.openElementsPage()
        onElementsPage.openWebTablesPage()
        onElementsPage.verifyWebTablesDefaultEntriesAmount()
        onElementsPage.addOneEntryToWebTable(name, lastname, email, age, salary, dept)
        onElementsPage.verifyWebTablesNewAddedEntry(name, lastname, email, age, salary, dept)
    })

    it('Opens Web Tables Page and deletes all entries and checks table for no entries', () => {
        onHomePage.openElementsPage()
        onElementsPage.openWebTablesPage()
        onElementsPage.verifyWebTablesDefaultEntriesAmount()
        onElementsPage.deleteAllEntriesToWebTable()
        onElementsPage.verifyEmptyFirstWebTableEntry()
    })

    it('Opens Web Tables Page and edits the first entry and checks for updated information', () => {
        onHomePage.openElementsPage()
        onElementsPage.openWebTablesPage()
        onElementsPage.verifyWebTablesDefaultEntriesAmount()
        onElementsPage.editFirstWebTableEntry(name, lastname, email, age, salary, dept)
        onElementsPage.verifyWebTablesNewEditedEntry(name, lastname, email, age, salary, dept)
    })

})

describe('Forms Page tests', () => {

    beforeEach('open main website', () => {
        cy.visit('https://demoqa.com/')
    })

    let email = "lois@thedailyplanet.com"
    let address = "408 Westin Oaks Dr \n Metropolis \n 70403"
    let name = "Lois"
    let lastname = "Lane"
    let phnumber = "5557722334"
   
    it('Opens Text Box Page, fills in text boxes and submits information', () => {
        onHomePage.openFormsPage()
        onFormsPage.openTestFormPage()
        onFormsPage.formFillInTextInformation(name,lastname,email,phnumber,address)
        onFormsPage.formSelectRadioAndCheckboxOptions()
        onFormsPage.formUploadImageFile()
        onFormsPage.formSelectDropdownOptions()
        onFormsPage.formSelectDateInCalendar()
        onFormsPage.formClickSubmitButton()
        onFormsPage.fullNameInTable().should('have.text', `${name} ${lastname}`)
        onFormsPage.emailInTable().should('have.text', `${email}`)
        onFormsPage.genderInTable().should('have.text', 'Female')
        onFormsPage.phoneNumberInTable().should('have.text', `${phnumber}`)
        onFormsPage.dobInTable().should('have.text', '08 March,2025')
        onFormsPage.subjectsInTable().should('have.text', 'Physics')
        onFormsPage.hobbiesInTable().should('have.text', 'Reading, Music')
        onFormsPage.pictureInTable().should('have.text', 'JPG2.jpg')
        onFormsPage.addressInTable().should('have.text', `${address}`)
        onFormsPage.stateAndCityInTable().should('have.text', 'Haryana Karnal')
        onFormsPage.formClickCloseModalButton()
    })

})

