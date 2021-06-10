const locators = {
  heading: { text: "Responsible Gaming", selector: "h1" },
};

const urlName = "responsible-gaming";

export class SportsResponsible {
  isOpened = () => {
    cy.url().should("include", urlName);
    cy.findByText(locators.heading.text, {
      selector: locators.heading.selector,
    }).should("have.text", 'Wrong text!');
  };
}
