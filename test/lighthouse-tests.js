const assert = require('chai').assert;

function runTestArray(uri) {


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
    //const testUrl = 'http://www.nowtolove.com.au/aww';

    // Setup lighthouse options
    const lighthouseOptions = {
        chromeFlags: ['--headlessless'],
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

    describe.skip('Lighthouse PWA Testing => ' + uri, function() {
        this.retries(2);
        this.timeout(40000);
        let _lhResult = null;
            beforeEach('Run Lighthouse base test', (done) => {
                lighthouse(uri, lighthouseOptions, auditConfig)
                    .then((res) => {
                    _lhResult = ourMetrics.prepareData(res);
            done();
            });
        });


        // Currently 1000ms is to high the example had 500ms

        it("should have first meaningful paint < 800ms", (done) => {
            let ttfmp = _lhResult.preparedResults.find(r => {
                    return r.name === 'ttfmp';
            });
            console.log("current reading is => " + ttfmp.value + "ms");
            assert.isBelow(ttfmp.value, 800);
            done();
        });

        // Currently 4000ms is to high the example had 1000ms

        it("should have time to interactive < 2500", (done) => {
            let tti = _lhResult.preparedResults.find(r => {
                    return r.name === 'tti';
            });
            console.log("current reading is => " + tti.value + "ms");
            assert.isBelow(tti.value, 2500);
            done();
        });
    });
}


const testUrl = ['http://www.nowtolove.com.au/','http://www.nowtolove.com.au/fashion', 'http://www.nowtolove.com.au/aww' ];

for (index = 0; index < testUrl.length; ++index) {
    console.log("testing => " + testUrl[index]);
    runTestArray(testUrl[index]);
    };

