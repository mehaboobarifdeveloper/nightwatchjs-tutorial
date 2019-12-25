module.exports = {
  'Demo test ecosia.org': function (browser) {
    //Create instance of the pageobject
    const page = browser.page.homeEcosiaPO();
    browser.windowMaximize();

    page
      .navigate()
      .performSearch()
      .assert.containsText('@searchResults', 'Nightwatch.js')
      .end();
  }
};