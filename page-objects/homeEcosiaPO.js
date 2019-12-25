var performSearchCommand =
{
    performSearch: function() {
    return this.waitForElementVisible('@txtSearchBox', 1000)
        .setValue('@txtSearchBox', 'nightwatch')
        .click('@btnSearch')
        .waitForElementVisible('@searchResults');
    }
};


module.exports = {
    url: 'https://www.ecosia.org/',
    elements: {
        txtSearchBox: 'input[type=search]',
        btnSearch: 'button[type=submit]',
        searchResults: '.mainline-results',

    },
    commands: [performSearchCommand]
};