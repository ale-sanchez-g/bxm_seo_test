//HACK: supertest doesn't support ES6 yet
var request = require('supertest');
var htmlparser = require("htmlparser2");
var schemas = require("./schemas.js");

const app = "http://now-site.test.bxm.net.au";

describe('SEO Schema validations', function() {

    it('Go to Homepage of NTL and validate its schema', function(done) {
        request(app)
            .get('/')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){

                        if(text.indexOf("schema.org") > -1) {
                            if (text !== JSON.stringify(schemas.mainExpectedSchema())) throw new Error("Schema is not incorrect : \n" + text);
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

    it('Go to Fashion Section of NTL and validate its schema', function(done) {
        request(app)
            .get('/fashion')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){

                        if(text.indexOf("schema.org") > -1) {
                            if (text !== JSON.stringify(schemas.mainExpectedSchema())) throw new Error("Schema is not incorrect : \n" + text);
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

    it('Go to AWW Brand Section of NTL and validate its schema', function(done) {
        request(app)
            .get('/aww')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){

                        if(text.indexOf("schema.org") > -1) {
                            if (text !== JSON.stringify(schemas.mainExpectedSchema())) throw new Error("Schema is not incorrect : \n" + text);
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

    it('Go to Article of NTL and validate its schema', function(done) {
        request(app)
            .get('/fashion/models/kendall-jenners-skin-doctor-tells-us-what-mistake-3640')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){

                        if(text.indexOf("schema.org") > -1) {
                            if (text !== JSON.stringify(schemas.articleExpectedSchema())) throw new Error("Schema is not incorrect : \n" + text);
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

    it('Go to Gallery of NTL and validate its schema', function(done) {
        request(app)
            .get('/fashion/red-carpet/automation-test-gallery-13302')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){

                        if(text.indexOf("schema.org") > -1) {
                            if (text !== JSON.stringify(schemas.galleryExpectedSchema())) throw new Error("Schema is not incorrect : \n" + text);
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

});