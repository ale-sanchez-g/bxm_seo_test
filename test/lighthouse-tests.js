const assert = require('chai').assert;

// Whhhhaaat? Yeah, you can import and use as you like.
const l_h = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');

function lighthouse(url, flags = {}, config = null) {
    return chromeLauncher.launch(flags).then(chrome => {
        flags.port = chrome.port;
    return l_h(url, flags, config).then(results =>
        chrome.kill().then(() => results));
});
}

// Define our test url
// You could just as easily start a local server to test as well
const testUrl = 'http://now-site.test.bxm.net.au/fashion';

// Setup lighthouse options
const lighthouseOptions = {
    //chromeFlags: ['--headless'],
    mobile: true,
    loadPage: true
};

// You can use your define custom Lighthouse configs, audits, and gatherers!
// You could also import pre-existing defines in the lighthouse repo, see:
// https://github.com/GoogleChrome/lighthouse/tree/master/lighthouse-core/config
// const auditConfig = require('lighthouse/lighthouse-core/config/perf.json');
const auditConfig = require('./audits.json');

// We'll process the results and then pass to our tests
// Based on Paul Irish's PWMetric sample
// https://github.com/paulirish/pwmetrics/
const ourMetrics = require('./metrics');

    describe.skip('Lighthouse PWA Testing', function() {
        // Retry all tests in this suite up to 2 times
        this.retries(2);

        // Failsafe; could be long depending on what you're trying to test
        this.timeout(40000);

        // We'll run our lighthouse set once and store for compare in this sample
        // you could very easily build a different sort of runner
        let _lhResult = null;

        beforeEach('Run Lighthouse base test', (done) => {
            lighthouse(testUrl, lighthouseOptions, auditConfig)
                .then((res) => {
                _lhResult = ourMetrics.prepareData(res);
        done();
        });
    });


    // Currently 1000ms is to high the example had 500ms

    it("should have first meaningful paint < 1000ms", (done) => {
        let ttfmp = _lhResult.preparedResults.find(r => {
                return r.name === 'ttfmp';
        });
        console.log("current reading is => " + ttfmp.value + "ms");
        assert.isBelow(ttfmp.value, 1000);
        done();
    });

    // Currently 4000ms is to high the example had 1000ms

    it("should have time to interactive < 4000ms", (done) => {
        let tti = _lhResult.preparedResults.find(r => {
                return r.name === 'tti';
        });
        console.log("current reading is => " + tti.value + "ms");
        assert.isBelow(tti.value, 4000);
        done();
    });
});