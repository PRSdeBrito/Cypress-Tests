

export class elementsPage{

    openTextBoxPage(){
        cy.get('#item-0').click()
        cy.get('.main-header')
        cy.should('have.text', 'Text Box')
    }

    fillInTextBox(fullname, email, address){
        cy.get('#userName').type(fullname)
        cy.get('#userEmail').type(email)
        cy.get('#currentAddress').type(address)
    }

    clickTextBoxSubmitButton(){
        cy.get('#submit').click()
    }

    verifyTextBoxSubmitSuccessful(fullname, email, address){
        cy.get('#name').should('have.text', `Name:${fullname}`)
        cy.get('#email').should('have.text', `Email:${email}`)
        cy.get('[id="currentAddress"][class="mb-1"]').should('have.text', `Current Address :${address} `)
    }

    //getName() {
    //    return cy.get('#name')
    //}

    openCheckBoxPage(){
        cy.get('#item-1').click()
        cy.get('.main-header')
        cy.should('have.text', 'Check Box')
    }

    tickCheckBoxHome(){
        cy.get('#tree-node-home').click({force: true})
    }

    confirmTickCheckBoxHome(){
        cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    }

    expandHomeCheckBox(){
        cy.get('[class="rct-collapse rct-collapse-btn"]').click({force: true})
    }

    verifyExpandHomeCheckBox(){
        cy.get('#tree-node-desktop').should('exist')
        cy.get('#tree-node-documents').should('exist')
        cy.get('#tree-node-downloads').should('exist')
    }

    clickExpandAllCheckboxes(){
        cy.get('[class="rct-icon rct-icon-expand-all"]').click()
    }

    verifyClickExpandAllCheckoxes(){
        cy.get('.rct-title').should('have.text', 'HomeDesktopNotesCommandsDocumentsWorkSpaceReactAngularVeuOfficePublicPrivateClassifiedGeneralDownloadsWord File.docExcel File.doc')
    }

    openRadioButtonPage(){
        cy.get('#item-2').click()
        cy.get('.main-header')
        cy.should('have.text', 'Radio Button')
    }

    selectYesRadioButton(){
        cy.get('#yesRadio').click({force: true})
    }

    selectImpressiveRadioButton(){
        cy.get('#impressiveRadio').click({force: true})
    }

    verifySelectYesRadioButton(){
        cy.get('.text-success').should('have.text', 'Yes')
    }

    verifySelectImpressiveRadioButton(){
        cy.get('.text-success').should('have.text', 'Impressive')
    }

    openWebTablesPage(){
        cy.get('#item-3').click()
        cy.get('.main-header')
        cy.should('have.text', 'Web Tables')
    }

    verifyWebTablesDefaultEntriesAmount(){
        cy.get('[class="rt-td"][role="gridcell"]').eq(0).should('have.text', 'Cierra')
        cy.get('[class="rt-td"][role="gridcell"]').eq(7).should('have.text', 'Alden')
        cy.get('[class="rt-td"][role="gridcell"]').eq(14).should('have.text', 'Kierra')
        cy.get('[class="rt-td"][role="gridcell"]').eq(21).should('not.have.text')
    }

    addOneEntryToWebTable(name, lastname, email, age, salary, dept){
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(name)
        cy.get('#lastName').type(lastname)
        cy.get('#userEmail').type(email)
        cy.get('#age').type(age)
        cy.get('#salary').type(salary)
        cy.get('#department').type(dept)
        cy.get('#submit').click()
    }

    verifyWebTablesNewAddedEntry(name, lastname, email, age, salary, dept){
        cy.get('[class="rt-td"][role="gridcell"]').eq(21).should('have.text', `${name}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(22).should('have.text', `${lastname}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(24).should('have.text', `${email}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(23).should('have.text', `${age}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(25).should('have.text', `${salary}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(26).should('have.text', `${dept}`)
    }

    deleteAllEntriesToWebTable(){
        cy.get('#delete-record-1').click()
        cy.get('#delete-record-2').click()
        cy.get('#delete-record-3').click()
    }

    verifyEmptyFirstWebTableEntry(){
        cy.get('[class="rt-td"][role="gridcell"]').eq(0).should('not.have.text')
        cy.get('[class="rt-td"][role="gridcell"]').eq(1).should('not.have.text')
        cy.get('[class="rt-td"][role="gridcell"]').eq(2).should('not.have.text')
        cy.get('[class="rt-td"][role="gridcell"]').eq(3).should('not.have.text')
        cy.get('[class="rt-td"][role="gridcell"]').eq(4).should('not.have.text')
        cy.get('[class="rt-td"][role="gridcell"]').eq(5).should('not.have.text')
    }

    editFirstWebTableEntry(name, lastname, email, age, salary, dept){
        cy.get('#edit-record-1').click()
        cy.get('#firstName').clear().type(name)
        cy.get('#lastName').clear().type(lastname)
        cy.get('#userEmail').clear().type(email)
        cy.get('#age').clear().type(age)
        cy.get('#salary').clear().type(salary)
        cy.get('#department').clear().type(dept)
        cy.get('#submit').click()
    }

    verifyWebTablesNewEditedEntry(name, lastname, email, age, salary, dept){
        cy.get('[class="rt-td"][role="gridcell"]').eq(0).should('have.text', `${name}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(1).should('have.text', `${lastname}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(3).should('have.text', `${email}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(2).should('have.text', `${age}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(4).should('have.text', `${salary}`)
        cy.get('[class="rt-td"][role="gridcell"]').eq(5).should('have.text', `${dept}`)
    }

}

export const onElementsPage = new elementsPage()