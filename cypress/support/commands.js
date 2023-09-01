Cypress.Commands.add("alfalahMakerLogin", () => {
  cy.get("#login_username").type("maker1");
  cy.get("#login-password-input").type("P@ssword1");
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("alfalahIdentityDocument", () => {
  cy.get("#__BVID__143").select("National ID Card");
  cy.get("#__BVID__146").selectFile("download.jpg", { force: true });
  cy.wait(2000);
  cy.get(".btn-success").click({ force: true });
  cy.get("#cnicBack").selectFile("download.jpg", { force: true });
  cy.wait(2000);
  cy.get(".btn").contains("CONTINUE").click({ force: true });
});

Cypress.Commands.add("alfalahSetupProfile", () => {
  // Basic Details
  cy.get('[data-vv-name="Full Name"]').type("dawood ibrahim"); // enter full name
  cy.get("#__BVID__215").type("tester"); // enter father name
  cy.get("#__BVID__218").type("testing"); //enter mother name
  cy.get("#__BVID__223 > :nth-child(2) > div > .form-control").type(
    "4210871543000"
  ); //enter ID Number
  cy.get(
    "#__BVID__226 > :nth-child(2) > .form-group > .mx-datepicker > .mx-input-wrapper > .mx-input"
  ).type("08/05/2019"); // Issuance date
  cy.get("#__BVID__235 > .custom-control > .custom-control-label").click(); // lifetime expiry
  cy.get("#__BVID__246 > :nth-child(2) > .form-group > .mx-datepicker").type(
    "08/05/1990"
  );
  cy.get("#__BVID__255").select("Karachi"); // enter place of birth
  cy.get("#__BVID__258").select("Male"); // select gender
  cy.get("#__BVID__261").select("Muslim"); // select religion
  cy.get("#__BVID__264 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // zakat deduction

  // Residential Details
  cy.get("#__BVID__270").select("Resident Pakistani"); // residential status
  cy.get("#__BVID__278").select("Pakistan"); // Nationality
  cy.get("#__BVID__281").select("Pakistan"); // country of residence
  cy.get("#__BVID__304 > :nth-child(1) > .custom-control-label").click(); // are you tax resident of pakistan/usa

  //contact detail
  cy.get("#__BVID__310").type("fb area"); // address
  cy.get("#__BVID__316").select("Karachi"); // city
  cy.get("#__BVID__319").select("Sindh"); //state
  cy.get("#__BVID__339").type("3000816164"); // mobile no
  cy.get("#__BVID__345").type("muhammadtahasheikh7@gmail.com"); // email
  cy.get("#__BVID__349 > :nth-child(2) > .custom-control-label > span").click(); // tax details
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
  cy.wait(2000);
  cy.get("#__BVID__362 > :nth-child(1) > .custom-control-label > span").click(); // relative radio button
  cy.get(".wrapper > :nth-child(1) > .btn").click(); // continue button
  cy.wait(2000);
});

Cypress.Commands.add("alfalahAccountInfo", () => {
  // Bank Details
  // cy.get(':nth-child(1) > div > h3').should("have.text", "Bank Details"); // Bank Details assertion
  cy.get("#__BVID__373 > div > .form-control").type("PK79ALFH0474001007361907"); // IBAN
  cy.get("#__BVID__377").select("Bank Alfalah Limited"); // bank name
  cy.get("#__BVID__383").type("fb area"); // branch
  cy.get("#__BVID__386").type("1000112"); // branch code
  cy.get("#__BVID__389").type("fb area block 25"); // address

  // Account Management Instructions
  cy.get("#__BVID__425 > :nth-child(1) > .custom-control-label > span").click(); // reinvest - caash dividend
  cy.get("#__BVID__430 > :nth-child(2) > .custom-control-label > span").click(); // Encash bonus units - stock dividend
  cy.get("#__BVID__435 > :nth-child(1) > .custom-control-label > span").click(); //DO YOU WISH TO RECEIVE STATEMENT OF ACCOUNTS?
  cy.get("#__BVID__440 > :nth-child(1) > .custom-control-label > span").click(); // post
  cy.get("#__BVID__440 > :nth-child(2) > .custom-control-label > span").click(); // email
  cy.get("#__BVID__445 > :nth-child(1) > .custom-control-label > span").click(); // SMS
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
  cy.wait(3000);
});

Cypress.Commands.add("alfalahKYC", () => {
  // Professional details
  // cy.get('#__BVID__454 > :nth-child(2) > .custom-control-label > span')
  cy.get("#__BVID__454 > :nth-child(2) > .custom-control-label > span")
    .should("have.text", "Graduate")
    .click({ force: true }); // education
  cy.get("#__BVID__464").select("Banker"); // occupation
  cy.get("#__BVID__467").select("Salary"); // source of funds
  cy.get("#__BVID__470").type("Business"); // nature of employer/business
  cy.get("#__BVID__473 > :nth-child(1) > .custom-control-label > span").click({
    force: true,
  }); // geographics involved
  cy.get("#__BVID__482 > :nth-child(1) > .custom-control-label > span").click({
    force: true,
  }); // type of counter parties
  cy.get("#__BVID__495 > :nth-child(1) > .custom-control-label > span").click({
    force: true,
  }); // POSSIBLE MODES OF TRANSCATIONS / DELIVERY CHANNELS
  cy.wait(2000);

  // Transaction details
  cy.get("#__BVID__501").select("1-3");
  cy.get("#__BVID__507").select("Up to Rs. 1,000,000");
  cy.wait(2000);

  // Declaration by Customer
  cy.get("#__BVID__511 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // HAS ANY FINANCIAL INSTITUTION EVER REFUSED TO OPEN YOUR ACCOUNT?
  cy.get("#__BVID__516 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // ARE YOU OPENING THIS ACCOUNT ON BEHALF OF ANY OTHER PERSON?
  cy.get("#__BVID__521 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // ARE YOU HOLDING A POSITION IN ANY GOVERNMENT/PUBLIC OFFICE?
  cy.get("#__BVID__526 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // ARE YOU HOLDING A POSITION IN ANY POLITICAL PARTY?
  cy.wait(2000);

  // PEP DECLARATION
  cy.get("#__BVID__532 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); //DO YOU CURRENTLY HOLD ANY PUBLIC POSITION?
  cy.get("#__BVID__537 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); //DID YOU HOLD ANY PUBLIC POSITION IN THE LAST 12 MONTHS?
  cy.get("#__BVID__542 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); //HAVE YOU EVER HELD ANY PUBLIC POSITION?
  cy.get("#__BVID__547 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DID YOU HAVE OR HAVE YOU EVER HAD ANY DIPLOMATIC IMMUNITY?
  cy.get("#__BVID__552 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE A RELATIVE WHO HAS HELD ANY PUBLIC POSITION IN THE LAST 12 MONTHS?
  cy.get("#__BVID__557 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE A CLOSE ASSOCIATE WHO HAS HELD ANY PUBLIC POSITION IN THE LAST 12 MONTHS?
  cy.get("#__BVID__562 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); //HAS THERE BEEN A CONVICTION AGAINST YOU BY A COURT OF LAW?
  cy.wait(2000);

  // FATCA Details (if applicable)
  cy.get("#__BVID__587 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE COUNTRY OF TAX RESIDENCE OTHER THAN PAKISTAN?
  cy.get("#__BVID__598 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // ARE YOU A US CITIZEN?
  cy.get("#__BVID__608 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?

  cy.get("#__BVID__613 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // STANDING INSTRUCTIONS TO TRANSFER FUNDS TO AN ACCOUNT MAINTAINED IN USA.
  cy.get("#__BVID__618 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE ANY POWER OF ATTORNEY/AUTHORISED SIGNATORY/MANDATE HOLDER HAVING US ADDRESS?
  cy.get("#__BVID__623 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE US RESIDENCE/MAILING/SOLE HOLD MAIL ADDRESS?
  cy.get("#__BVID__628 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DO YOU HAVE US TELEPHONE NUMBER?
  cy.get("#__BVID__603 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); //ARE YOU A US RESIDENT?

  cy.wait(2000);
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
});

Cypress.Commands.add("alfalahRPQ", () => {
  // Risk Profiling Questionnaire
  cy.get("#__BVID__641 > :nth-child(4) > .custom-control-label > span").click({
    force: true,
  }); // age
  cy.get("#__BVID__648 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // WHAT IS YOUR INVESTMENT HORIZON?
  cy.get("#__BVID__655 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // DEFINE YOUR INVESTMENT KNOWLEDGE?
  cy.get("#__BVID__662 > :nth-child(2) > .custom-control-label > span").click({
    force: true,
  }); // WHAT IS YOUR RISK APPETITE?
  cy.get("#__BVID__669 > :nth-child(1) > .custom-control-label > span").click({
    force: true,
  }); // HOW WILL YOU DEFINE YOUR INVESTMENT EXPERIENCE BY ASSET CLASSES? (YOU MAY SELECT MULTIPLE)
  cy.get("#__BVID__676 > :nth-child(1) > .custom-control-label > span").click({
    force: true,
  }); // INVESTMENT OBJECTIVE

  cy.wait(2000);
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
  cy.wait(1000);
  cy.get(".thank-you-heading")
    .should("have.text", "Thank You!")
    .should("be.visible");
  cy.get("#__BVID__693___BV_modal_footer_ > .btn")
    .should("have.text", "OK")
    .click(); // Ok button
});

Cypress.Commands.add("alfalahRiskProfile", () => {
  cy.get("#range-1").click({ force: true }); // moderate risk
  cy.get(".multiselect__tags")
    .click()
    .type("Alfalah Islamic Rozana Amdani Fund (Low){enter}"); // Recommended Fund as per Fund(s) Risk Category
  cy.wait(1000);
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
});

Cypress.Commands.add("alfalahUploadDocuments", () => {
  cy.get("#businessProof").selectFile("download.jpg", { force: true }); // business proof
  cy.get("#digitalSignature").selectFile("download.jpg", { force: true }); //digital signature
  cy.get("#zakatAffidavit").selectFile("download.jpg", { force: true }); // zakat affidavit
  cy.get("#pmdaRelativeForm").selectFile("download.jpg", { force: true }); // pmda relative form
  cy.wait(2000);
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
});

Cypress.Commands.add("alfalahPreview", () => {
  cy.get(
    ":nth-child(2) > :nth-child(1) > .seprator-section > div.row > :nth-child(2) > .row > :nth-child(2) > span"
  ).should("have.text", "dawood ibrahim"); // assert full name
  cy.get(
    ":nth-child(2) > :nth-child(1) > .seprator-section > div.row > :nth-child(3) > .row > :nth-child(2) > span"
  ).should("have.text", "tester"); // assert fathers name
  cy.get(
    ":nth-child(2) > :nth-child(1) > .seprator-section > div.row > :nth-child(4) > .row > :nth-child(2) > span"
  ).should("have.text", "testing"); // assert mothers name
  cy.get(
    ":nth-child(2) > :nth-child(1) > .seprator-section > div.row > :nth-child(6) > .row > :nth-child(2) > span"
  ).should("have.text", "1990-05-08"); // assert date
  cy.get(
    ":nth-child(3) > :nth-child(1) > .seprator-section > div.row > :nth-child(3) > .row > :nth-child(2) > span"
  ).should("have.text", "Pakistan"); // assert nationality
  cy.get(
    ":nth-child(4) > :nth-child(1) > .seprator-section > div.row > :nth-child(12) > .row > :nth-child(2) > span"
  ).should("have.text", "muhammadtahasheikh7@gmail.com"); // assert email
  cy.get(
    ":nth-child(4) > :nth-child(1) > .seprator-section > div.row > :nth-child(2) > .row > :nth-child(2) > span"
  ).should("have.text", "fb area"); // assert address
  cy.get(
    ":nth-child(7) > :nth-child(1) > .seprator-section > div.row > :nth-child(7) > .row > :nth-child(2) > span"
  ).should("have.text", "PK79ALFH0474001007361907"); // assert IBAN NO
  cy.get(
    ":nth-child(10) > :nth-child(1) > .seprator-section > div.row > :nth-child(5) > .row > :nth-child(2) > span"
  ).should("have.text", "Encash Bonus Units"); // assert stock dividend
  cy.get(
    ":nth-child(12) > :nth-child(1) > .seprator-section > div.row > :nth-child(2) > .row > :nth-child(2) > span"
  ).should("have.text", "Graduate"); // assert education
  cy.get(
    ":nth-child(22) > :nth-child(1) > .seprator-section > div.row > :nth-child(6) > .row > :nth-child(2) > span"
  ).should("have.text", "Alfalah Islamic Rozana Amdani Fund (Low) "); // assert Recommended Fund(s) as per Fund Risk Category
  cy.wait(2000);
  cy.get(".btn-primary").contains("CONTINUE").click(); // continue button
  cy.wait(2000);
});

Cypress.Commands.add("alfalahFinish", () => {
  cy.wait(2000);
  cy.get("h3").should("have.text", "Thank you");
});

Cypress.Commands.add("alfalahsetAndAssertKycStatusAndComment", () => {
  cy.get(".modal-title").contains("KYC Status Review").should("exist"); //assert modal

  cy.get(":nth-child(2) > .custom-control-label > span")
    .contains("Accepted")
    .should("exist")
    .click({ force: true }); // KYC status
  cy.get(":nth-child(4) > .form-control").type("accepted"); //KYC comments
  cy.get(".action-buttons > .btn-primary > .btn-text")
    .contains("Submit")
    .should("exist")
    .click({ force: true }); //submit button
  cy.wait(3000);
  cy.get(
    ":nth-child(1) > :nth-child(2) > .row > :nth-child(1) > .tags-section > .tag-status > .success"
  )
    .scrollIntoView()
    .should("have.attr", "class")
    .and("equal", "success"); // Assert Sanction hit

  cy.get(":nth-child(3) > .status-view").contains("Approved").should("exist"); //Assert KYC status
});

Cypress.Commands.add("alfalahCheckerLogin", () => {
  cy.get("#login_username").type("checker1");
  cy.get("#login-password-input").type("P@ssword1");
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("alfalahAssertCheckerData", () => {
  cy.get(
    ":nth-child(1) > :nth-child(1) > .seprator-section > div.row > :nth-child(3) > .row > :nth-child(2) > span"
  ).should("have.text", "dawood ibrahim"); // assert full name
  cy.get(
    ":nth-child(1) > :nth-child(1) > .seprator-section > div.row > :nth-child(4) > .row > :nth-child(2) > span"
  ).should("have.text", "tester"); // assert full name
  cy.get(
    ":nth-child(1) > :nth-child(1) > .seprator-section > div.row > :nth-child(5) > .row > :nth-child(2) > span"
  ).should("have.text", "testing"); // assert full name
  cy.get(
    ":nth-child(3) > :nth-child(1) > .seprator-section > div.row > :nth-child(12) > .row > :nth-child(2) > span"
  ).should("have.text", "muhammadtahasheikh7@gmail.com"); // assert email
  cy.get(
    ":nth-child(5) > :nth-child(1) > .seprator-section > div.row > :nth-child(5) > .row > :nth-child(2) > span"
  ).should("have.text", "PK79ALFH0474001007361907"); // assert IBAN No
  cy.get(
    ":nth-child(8) > :nth-child(1) > .seprator-section > div.row > :nth-child(5) > .row > :nth-child(2) > span"
  ).should("have.text", "Encash Bonus Units"); // assert Stock Dividend
  cy.get(
    ":nth-child(9) > :nth-child(1) > .seprator-section > div.row > :nth-child(2) > .row > :nth-child(2) > span"
  ).should("have.text", "Graduate"); // assert Education
  cy.get(
    ":nth-child(1) > :nth-child(2) > .row > :nth-child(1) > .tags-section > .tag-status > .success"
  )
    .scrollIntoView()
    .should("have.attr", "class")
    .and("equal", "success"); // Assert Sanction hit
  cy.get(":nth-child(3) > .status-view").contains("Approved").should("exist"); //Assert KYC status
});

Cypress.Commands.add("alfalahApproverSetAndAssertKycStatusAndComment", () => {
  cy.get(".modal-title").contains("KYC Status Review").should("exist"); //assert modal

  cy.get(":nth-child(3) > .custom-control-label > span")
    .contains("Rejected")
    .should("exist")
    .click({ force: true }); // KYC status
  cy.get(":nth-child(4) > .form-control").type("rejected"); //KYC comments
  cy.get(".action-buttons > .btn-primary > .btn-text")
    .contains("Submit")
    .should("exist")
    .click({ force: true }); //submit button
  cy.wait(3000);
  cy.get(
    ":nth-child(1) > :nth-child(2) > .row > :nth-child(1) > .tags-section > .tag-status > .success"
  )
    .scrollIntoView()
    .should("have.attr", "class")
    .and("equal", "success"); // Assert Sanction hit

  cy.get(":nth-child(3) > .status-view").contains("Rejected").should("exist"); //Assert KYC status
});
