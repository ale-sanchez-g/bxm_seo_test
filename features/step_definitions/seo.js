module.exports = function() {

    this.Given(/^I navigate to "([^"]*)"$/, function (uri) {
        browser.url(uri);
    });

    this.When(/^I submit a validation for my schema$/, function (string) {
        browser.waitForVisible("a#new-test-code", 5000);
        browser.click("a#new-test-code");
        browser.addValue(".CodeMirror-empty > div:nth-child(1) > textarea:nth-child(1)", string);
        browser.click("button#new-test-submit-button");
    });

    this.Then(/^I can see there are no Errors or Warning in the validation output$/, function () {
        browser.waitForExist("span.mdl-list__item-secondary-content > span.K4efff-fmcmS", 5000);
        var resultArr = browser.getText("span.mdl-list__item-secondary-content > span.K4efff-fmcmS", 5000);
        expect(resultArr[0]).toEqual("0 ERRORS");
        expect(resultArr[1]).toEqual("0 WARNINGS");

    });

};
