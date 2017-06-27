const assert = require('chai').assert;

// Whhhhaaat? Yeah, you can import and use as you like.
const l_h = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');

function lighthouse(url, flags = {}, config = null) {
    return chromeLauncher.launch().then(chrome => {
        flags.port = chrome.port;
    return l_h(url, flags, config).then(results =>
        chrome.kill().then(() => results));
});
}

const flags = {};

// Define our test url
// You could just as easily start a local server to test as well
const testUrl = 'http://www.nowtolove.com.au/fashion';

// Setup lighthouse options
const lighthouseOptions = {
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

describe('Lighthouse PWA Testing', function() {

    // Failsafe; could be long depending on what you're trying to test
    this.timeout(60000);

    // We'll run our lighthouse set once and store for compare in this sample
    // you could very easily build a different sort of runner
    let _lhResult = null;

    before('Run Lighthouse base test', (done) => {
        lighthouse(testUrl, lighthouseOptions, auditConfig)
            .then((res) => {
            _lhResult = ourMetrics.prepareData(res);
    done();
});
});


// We currenlty do not use Service Workers for Offline usage
//it("should have service worker", (done) => {
//    let sw = _lhResult.preparedResults.find(r => {
//            return r.name === 'sw';
//});
//assert.equal(sw.value, true);
//done();
//});


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