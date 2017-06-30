//HACK: supertest doesn't support ES6 yet
var request = require('supertest');
const app = "http://dev.rss.services.bauer-media.net.au/";
const assert = require('chai').assert;
var schemas = require("./schemas.js");



describe('Smoke test of listings service', function() {

    it('respond with APP NAME', function(done) {
        this.retries(2);
        request(app)
            .get('/')
            .expect(200)
            .expect(function(res) {
                if (res.text !== 'RSS_SERVICE') throw new Error("ERROR");
            })
            .end(done);
    });

    it('what to get some contetn from Dolly', function(done) {
        this.retries(2);
        request(app)
            .get('rss/dolly/full-content')
        .expect(function(res) {
                const result = res.text;
                //console.log(result);
                assert.include(result, '<channel>');
                assert.include(result, 'xmlns:mi="http://schemas.ingestion.microsoft.com/common/"');
                assert.include(result, 'xmlns:media="http://search.yahoo.com/mrss/"');
                assert.include(result, '</channel>');
                assert.include(result, '<![CDATA[Dolly homepage test title 861]]>');
                assert.include(result, '<link>http://dev.dolly-site.bauer-media.net.au</link>');
                assert.include(result, '<atom:link href="http://dev.rss.services.bauer-media.net.au/rss/dolly/full-content" rel="self" type="application/rss+xml"/>');
                assert.include(result, '<copyright><![CDATA[2017 BAUER MEDIA PTY LIMITED]]></copyright>');})
        .end(done);
    });

});