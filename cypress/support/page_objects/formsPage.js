

export class formsPage{

    openTestFormPage(){
        cy.contains('[class="btn btn-light "]', 'Practice Form').click()
        cy.get('.main-header')
        cy.should('have.text', 'Practice Form')
    }

    formFillInTextInformation(name,lastname,email,phnumber,address){
        cy.get('#firstName').type(name)
        cy.get('#lastName').type(lastname)
        cy.get('#userEmail').type(email)
        cy.get('#userNumber').type(phnumber)
        cy.get('#currentAddress').type(address)
    }

    formSelectRadioAndCheckboxOptions(){
        cy.get('#gender-radio-2').click({force:true})
        cy.get('#hobbies-checkbox-2').click({force:true})
        cy.get('#hobbies-checkbox-3').click({force:true})
    }

    formUploadImageFile(){
        cy.get('#uploadPicture').selectFile('cypress/fixtures/JPG2.jpg')
    }

    formSelectDropdownOptions(){
        cy.get('#subjectsInput').type('Physics{enter}')
        cy.get('#state').type('Har{enter}')
        cy.get('#city').type('Kar{enter}')
    }

    formSelectDateInCalendar(){
        cy.get('#dateOfBirthInput').click()
        cy.get('[class="react-datepicker__month-select"]').select('March')
        cy.get('[class="react-datepicker__year-select"]').select('2025')
        cy.get('[class="react-datepicker__day react-datepicker__day--008 react-datepicker__day--weekend"]').click()
    }

    formClickSubmitButton(){
        cy.get('#submit').click()
    }

    formClickCloseModalButton(){
        cy.get('#closeLargeModal').click()
    }

    fullNameInTable(){
        return cy.get("tr td").eq(1)
    }

    emailInTable(){
        return cy.get("tr td").eq(3)
    }

    genderInTable(){
        return cy.get("tr td").eq(5)
    }

    phoneNumberInTable(){
        return cy.get("tr td").eq(7)
    }

    dobInTable(){
        return cy.get("tr td").eq(9)
    }

    subjectsInTable(){
        return cy.get("tr td").eq(11)
    }

    hobbiesInTable(){
        return cy.get('tr td').eq(13)
    }

    pictureInTable(){
        return cy.get('tr td').eq(15)
    }

    addressInTable(){
        return cy.get('tr td').eq(17)
    }

    stateAndCityInTable(){
        return cy.get('tr td').eq(19)
    }

    formCheckAPIResponse(){
        cy.intercept({
            method: 'POST',
            url: '/myApi',
          }).as('apiCheck')
    }
}

export const onFormsPage = new formsPage()