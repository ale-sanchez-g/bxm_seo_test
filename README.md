# bxm seo test

A set of test to run SEO and performance test in the browser.
To ensure SEO functionality is not lost this is a set of SEO testing tools to ensure the below is validated

* SEO schema as per schema.org
* Page perfomance does not degrade using lighthouse


#refer to 
* https://github.com/justinribeiro/lighthouse-mocha-example
* https://github.com/googlechrome/lighthouse/blob/HEAD/docs/readme.md#using-programmatically

## Platform Requirements
dadd
### Node
Use NVM to manage Node versions and `nvm install` in this repo for correct Node version to use.

- OSX/Linux: https://github.com/creationix/nvm
- Windows: https://github.com/coreybutler/nvm-windows

### Bash

Use Git Bash only.

## Run Scripts

Node module [npm-run-all](https://github.com/mysticatea/npm-run-all) cli is used to provide cross platform script parallelisation control.

### mobile:test

runs perf test on lighthouse and produces and HTML report - mobile breakpoint

### desktop:test

runs perf test on lighthouse and produces and HTML report - desktop breakpoint

### mocha:test

runs all mocha test SEO and lighthouse perf test

### five:test

runs mobile:test 5 times so the user can create an average (test results do fluctuate) :(
