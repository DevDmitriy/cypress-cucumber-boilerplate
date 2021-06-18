const locators = {
  modalContainer: {selector: '.ram-scrm'},
  header: {selector: '.header'},
  title: {text: 'My News', selector: '.title'},
};

export class NewsModal {
  close = () => {
    cy.get(locators.modalContainer.selector)
      .findByText(locators.title.text, { selector: locators.title.selector })
      .contains(locators.title.text);

    cy.get(locators.modalContainer.selector)
      .get(locators.header.selector)
      .findByRole('button')
      .click();
  };
}
