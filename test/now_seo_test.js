//HACK: supertest doesn't support ES6 yet
var request = require('supertest');
var htmlparser = require("htmlparser2");
var schemas = require("./schemas.js");

const app = "http://now-site.test.bxm.net.au";


describe('SEO Schema validations', function() {
    this.retries(2);

    it('Go to Homepage of NTL and validate its schema', function(done) {

        var mainSchema = schemas.mainExpectedSchema();


        request(app)
            .get('/')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){
                        if(text.indexOf("schema.org") > -1) {
                            var mainJson = JSON.parse(text);
                            if (mainJson["@context"] !== mainSchema["@context"]) throw new Error("Context is incorrect : \n" + mainJson["@context"]);
                            if (mainJson["url"] !== mainSchema["url"]) throw new Error("URL is incorrect : \n" + mainJson["url"]);
                            if (mainJson["@type"] !== mainSchema["@type"]) throw new Error("Type is incorrect : \n" + mainJson["@type"]);
                            if (mainJson["potentialAction"]["@type"] !== mainSchema["potentialAction"]["@type"]) throw new Error("potentialAction Type is incorrect : \n" + mainJson["potentialAction"]["@type"]);
                            if (mainJson["potentialAction"]["target"] !== mainSchema["potentialAction"]["target"]) throw new Error("potentialAction target is incorrect : \n" + mainJson["potentialAction"]["target"]);
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

    it('I can validate my schema has AMP required info', function(done) {
        request(app)
            .get('/fashion/models/kendall-jenners-skin-doctor-tells-us-what-mistake-3640')
            .expect(function(res) {
                var parser = new htmlparser.Parser({
                    ontext: function(text){
                        if(text.indexOf("schema.org") > -1) {
                            var mainJson = JSON.parse(text);
                            if (mainJson["@context"] !== "") throw new Error("Context is incorrect : \n" + mainJson["@context"]);
                            if (mainJson["mainEntityOfPage"]["@id"] !== "") throw new Error("mainEntityOfPage.id is incorrect : \n" + mainJson["mainEntityOfPage"]["@id"]);
                        //| Properties            |
                        //    | mainEntityOfPage      |
                        //    | headline              |
                        //    | image                 |
                        //    | image.url             |
                        //    | image.height          |
                        //    | image.width           |
                        //    | publisher             |
                        //    | publisher.name        |
                        //    | publisher.logo        |
                        //    | publisher.logo.url    |
                        //    | publisher.logo.height |
                        //    | publisher.logo.width  |
                        //    | datePublished         |
                        //    | dateModified          |
                        //    | author                |
                        //    | author.name	        |
                        //    | description           |
                        }
                    }
                }, {decodeEntities: true});
                parser.write(res.text);
                parser.end();
            })
            .expect(200, done);
    });

});