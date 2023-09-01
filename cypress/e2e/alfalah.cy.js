import "../support/commands";

describe("ALFALAH-UAT", () => {
    it("Maker", () => {
      cy.viewport(1366, 768);
      cy.visit("alfalahuat.idenfo.com");
      cy.alfalahMakerLogin();
      cy.wait(2000);
      cy.clickSidebar();
      cy.alfalahIdentityDocument();
      cy.alfalahSetupProfile();
      cy.alfalahAccountInfo();
      cy.wait(3000);
      cy.alfalahKYC();
      cy.alfalahRPQ();
      cy.alfalahRiskProfile();
      cy.alfalahUploadDocuments();
      cy.alfalahPreview();
      cy.wait(2000);
      cy.alfalahFinish();
      cy.wait(2000);
      cy.reload();

      cy.get(".sidebar-nav > .navigation > ul > :nth-child(1) > a > span")
        .should("have.text", "Insights")
        .click(); // click Insights tab
      cy.wait(2000);
      cy.get("tr").eq(1).click();
      cy.get(":nth-child(5) > .btn > .btn-text").click({ force: true }); // INITIATE REVIEW button
      cy.wait(1000);
      cy.get(".col-md-12 > .btn-primary > .btn-text")
        .contains("Yes, Initiate Review")
        .should("be.visible")
        .click({ force: true }); // Assert and click 'Yes, Initiate Review' button
      cy.wait(4000);
      cy.get("header")
        .contains("Name Screening")
        .should("exist")
        .click({ force: true }); // click on name screening button
      cy.wait(2000);
      cy.get(".auto-adjust-btn-padding > :nth-child(3) > .btn")
        .contains("KYC STATUS REVIEW")
        .should("exist")
        .click({ force: true }); // Click KYC status review button
      cy.wait(3000);
      cy.alfalahsetAndAssertKycStatusAndComment();
      // cy.wait(2000);
    });

    it("Checker", () => {
      cy.viewport(1366, 768);
      cy.visit("alfalahuat.idenfo.com");
      cy.alfalahCheckerLogin();
      cy.wait(4000);
      cy.get("#style-3 > ul > :nth-child(3) > a").click();
      cy.get(".sidebar-nav > .navigation > ul > :nth-child(1) > a > span")
        .should("have.text", "Insights")
        .click(); // click Insights tab
      cy.get("tr").eq(1).click(); // Click first row from table
      cy.wait(2000);
      cy.alfalahAssertCheckerData();
      cy.wait(2000);
      cy.get(":nth-child(5) > .btn > .btn-text").click({ force: true }); // INITIATE REVIEW button
      cy.wait(2000);
      cy.get(".col-md-12 > .btn-primary > .btn-text")
        .contains("Yes, Initiate Review")
        .should("be.visible")
        .click({ force: true }); // Assert and click 'Yes, Initiate Review' button
      cy.wait(4000);
      cy.get(".auto-adjust-btn-padding > :nth-child(3) > .btn")
        .contains("KYC STATUS REVIEW")
        .should("exist")
        .click({ force: true }); // Click KYC status review button
      cy.alfalahsetAndAssertKycStatusAndComment();
    });

  it("Approver", () => {
    cy.reload();
    cy.viewport(1366, 768);
    cy.visit("alfalahuat.idenfo.com");
    cy.approverLogin();
    cy.wait(3000);
    cy.get(".sidebar-nav > .navigation > ul > :nth-child(1) > a > span")
      .should("have.text", "Insights")
      .click(); // click Insights tab

    cy.get("tr").eq(1).click(); // Click first row from table
    cy.wait(5000);
    cy.alfalahAssertCheckerData();

    cy.get(":nth-child(5) > .btn > .btn-text").click({ force: true }); // INITIATE REVIEW button
    cy.wait(2000);
    cy.get(".col-md-12 > .btn-primary > .btn-text")
      .contains("Yes, Initiate Review")
      .should("be.visible")
      .click({ force: true }); // Assert and click 'Yes, Initiate Review' button
    cy.wait(4000);
    cy.get(".auto-adjust-btn-padding > :nth-child(3) > .btn")
      .contains("KYC STATUS REVIEW")
      .should("exist")
      .click({ force: true }); // Click KYC status review button
    cy.alfalahApproverSetAndAssertKycStatusAndComment();
  });
});
