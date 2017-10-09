var htmlparser = require("htmlparser2");


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

    this.When(/^I submit "([^"]*)" url to be validated$/, function (uri) {
        browser.waitForVisible("a#new-test-url", 5000);
        browser.click("a#new-test-url");
        browser.addValue(".#new-test-url-input", uri);
        browser.click("button#new-test-submit-button");
    });

    this.Given(/^I a have an NewsArticle schema$/, function () {
        browser.url("https://www.sit.nowtolove.com.au/amp/news/latest-news/test-article-77116");
    });

    this.Then(/^I can ensure the below properties are populated to be AMP ready$/, function (table) {
        var jsonContent = [];
        var pageHtml = browser.getSource();
        var parser = new htmlparser.Parser({
            ontext: function(text){
                if(text.indexOf("schema.org") > -1) {
                    var mainJson = JSON.parse(text); //to handle multiple schemas (article, videoObject)
                    jsonContent.push(mainJson);
                }
            }
        }, {decodeEntities: true});
        parser.write(pageHtml);
        parser.end();

        if (jsonContent[0]["@context"] !== "http://schema.org") throw new Error("Context is incorrect : \n" + jsonContent[0]["@context"]);
        if (jsonContent[0]["@type"] !== "Article") throw new Error("Type is incorrect : \n" + jsonContent[0]["@type"]);
        expect(jsonContent[0]["headline"]).toContain("| Now To Love");
        //if (jsonContent[0]["headline"] !== "Turia Pitt on the lesson she will pass on to her son | Now To Love") throw new Error("Type is incorrect : \n" + jsonContent[0]["headline"]);
        if (jsonContent[0]["image"]["url"] !== "") throw new Error("Type is incorrect : \n" + jsonContent[0]["image"]["url"]);

    });


};
