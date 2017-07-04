const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const auditConfig = require('lighthouse/lighthouse-core/config/perf.json');

function launchChromeAndRunLighthouse(url, flags, config) {
    return chromeLauncher.launch(flags).then(chrome => {
        flags.port = chrome.port;
    return lighthouse(url, flags, config).then(results =>
        chrome.kill().then(() => results));
});
}

const flags = {
    chromeFlags: ['--headlessless']
};

// Usage:
launchChromeAndRunLighthouse('http://www.nowtolove.com.au/royals/british-royal-family/best-royal-moments-2017-37868', flags, auditConfig).then(results => {
    console.log(results.reportCategories.find(o => o.id === 'performance').score);
});