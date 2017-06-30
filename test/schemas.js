module.exports = {

    mainExpectedSchema: function(){
        return { "@context": 'http://schema.org',
            "url": 'http://now-site.test.bxm.net.au/',
            "@type": 'WebSite',
            potentialAction:
            { "@type": 'SearchAction',
                target: 'http://now-site.test.bxm.net.au//search?q={search_term}',
                'query-input': 'required name=search_term' } }
    },

    articleExpectedSchema: function(){
        return { '@context': 'http://schema.org',
            url: 'http://now-site.test.bxm.net.au/',
            '@type': 'Article',
            headline: 'Kendall Page Title | Now To Love',
            description: 'Kendal Meta Description',
            publisher: { '@type': 'Organization', name: '' },
            author: { '@type': 'Person', name: '' },
            image:
            { '@type': 'ImageObject',
                url: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Dolly/2016/01/13/72089/kendallllllzzz-(1).jpg?width=500&height=500&quality=75',
                height: 800,
                width: 800 },
            datePublished: '2016-01-02T13:35:00.00Z',
            dateModified: '',
            mainEntityOfPage:
            { '@type': 'WebPage',
                '@id': 'http://now-site.test.bxm.net.au/' } }

    },

    galleryExpectedSchema: function() {
        return { '@context': 'http://schema.org',
            url: 'http://now-site.test.bxm.net.au/',
            '@type': 'Article',
            headline: 'Automation Test Gallery | Now To Love',
            description: 'Test meta data In pics: 15 celebs who nail no makeup makeup looks. Celebrities with natural looking makeup look',
            publisher: { '@type': 'Organization', name: 'Australian Women\'s Weekly' },
            author: { '@type': 'Person', name: 'Emily Jabour' },
            image:
            { '@type': 'ImageObject',
                url: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Dolly/2015/06/11/68027/main.jpg?width=500&height=500&quality=75',
                height: 800,
                width: 800 },
            datePublished: '2016-12-15T03:25:34.00Z',
            dateModified: '',
            mainEntityOfPage:
            { '@type': 'WebPage',
                '@id': 'http://now-site.test.bxm.net.au/' } }

    },

    rssReponseSchema: function() {
    }

    // -> proper schemas
    //
    //mainExpectedSchema: function() {
    //    return {
    //        "@context": "http://schema.org",
    //        "@type": "WebSite",
    //        "url": "http://now-site.test.bxm.net.au/",
    //        "potentialAction": {
    //            "@type": "SearchAction",
    //            "target": "http://now-site.test.bxm.net.au/tags/{search_term_string}",
    //            "query-input": "required name=search_term_string"
    //        }
    //    }
    //},
    //
    //articleExpectedSchema: function(){
    //    return {
    //        "@context": "http://schema.org",
    //        "@type": "Article",
    //        "mainEntityOfPage": {
    //            "@type": "WebPage",
    //            "@id": "http://now-site.test.bxm.net.au/fashion/models/kendall-jenners-skin-doctor-tells-us-what-mistake-3640"
    //        },
    //        "headline": "Kendall Page Title | Now To Love",
    //        "image": {
    //            "@type": "ImageObject",
    //            "url": "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Dolly/2016/01/13/72089/kendallllllzzz-(1).jpg",
    //            "height": 800,
    //            "width": 800
    //        },
    //        "datePublished": "2016-01-02T13:35:00.00Z",
    //        "dateModified": "2016-01-02T13:35:00.00Z",
    //        "author": {
    //            "@type": "Person",
    //            "name": "Emily Jabour"
    //        },
    //        "publisher": {
    //            "@type": "Organization",
    //            "name": "Now To Love",
    //            "logo": {
    //                "@type": "ImageObject",
    //                "url": "http://www.nowtolove.com.au/assets/images/menulogos/NTL-logo.svg",
    //                "width": 600,
    //                "height": 60
    //            }
    //        },
    //        "description": "Kendal Meta Description"
    //    }
    //},

    //galleryExpectedSchema: function(){
    //    return {
    //        "@context": "http://schema.org",
    //        "@type": "Article",
    //        "mainEntityOfPage": {
    //            "@type": "WebPage",
    //            "@id": "http://now-site.test.bxm.net.au/fashion/red-carpet/automation-test-gallery-13302"
    //        },
    //        "headline": "Automation Test Gallery | Now To Love",
    //        "image": {
    //            "@type": "ImageObject",
    //            "url": "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Dolly/2015/06/11/68027/main.jpg",
    //            "height": 800,
    //            "width": 800
    //        },
    //        "datePublished": "2016-12-15T03:25:34.00Z",
    //        "dateModified": "2016-12-15T03:25:34.00Z",
    //        "author": {
    //            "@type": "Person",
    //            "name": "Emily Jabour"
    //        },
    //        "publisher": {
    //            "@type": "Organization",
    //            "name": "Australian Women's Weekly",
    //            "logo": {
    //                "@type": "ImageObject",
    //                "url": "http://www.nowtolove.com.au/assets/images/headerlogos/AWW-logo.svg",
    //                "width": 600,
    //                "height": 60
    //            }
    //        },
    //        "description": "Test meta data In pics: 15 celebs who nail no makeup makeup looks. Celebrities with natural looking makeup look"
    //    }
    //}

    //reviewExpectedSchema: function() {
    //    {
    //        "@context": "http://schema.org",
    //        "@type": "WebPage",
    //        "@id": "https://www.whichcar.com.au/car-reviews/honda-civic-review",
    //        "url": "https://www.whichcar.com.au/car-reviews/honda-civic-review",
    //        "isPartOf": {
    //        "@type": "WebSite",
    //            "@id": "https://www.whichcar.com.au/#site"
    //    },
    //        "breadcrumb": {
    //        "@type": "BreadcrumbList",
    //            "itemListElement": [
    //            {
    //                "@type": "ListItem",
    //                "position": 1,
    //                "item": {
    //                    "@id": "https://www.whichcar.com.au",
    //                    "name": "Home"
    //                }
    //            },
    //            {
    //                "@type": "ListItem",
    //                "position": 2,
    //                "item": {
    //                    "@id": "https://www.whichcar.com.au/car-reviews",
    //                    "name": "Car Reviews"
    //                }
    //            },
    //            {
    //                "@type": "ListItem",
    //                "position": 3,
    //                "item": {
    //                    "@id": "https://www.whichcar.com.au/honda",
    //                    "name": "Honda"
    //                }
    //            },
    //            {
    //                "@type": "ListItem",
    //                "position": 4,
    //                "item": {
    //                    "@id": "https://www.whichcar.com.au/honda/civic",
    //                    "name": "Civic"
    //                }
    //            }
    //        ]
    //    },
    //        "mainEntity": {
    //        "@type": "Car",
    //            "@id": "https://www.whichcar.com.au/car-reviews/honda-civic-review#this",
    //            "url": "https://www.whichcar.com.au/car-reviews/honda-civic-review",
    //            "name": "2017 Honda Civic",
    //            "brand": {
    //            "@type": "Brand",
    //                "@id": "https://www.whichcar.com.au/honda#this"
    //        },
    //        "model": "Civic",
    //            "vehicleModelDate": 2017,
    //        "image": {
    //            "@type": "ImageObject",
    //                "url": "https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/ccr/1023/-/s3/digital-cougar-assets/whichcar/2017/06/27/2643/Honda-Civic-VTi-LX-Hatch-2017-drive-WIDE.jpg",
    //                "width": 700,
    //                "height": 500
    //        },
    //        "review": {
    //            "@type": "Review",
    //                "@id": "https://www.whichcar.com.au/car-reviews/honda-civic-review#review",
    //                "url": "https://www.whichcar.com.au/car-reviews/honda-civic-review",
    //                "headline": "2017 Honda Civic Review",
    //                "datePublished": "2017-06-22T06:31:00-0700",
    //                "dateModified": "2017-06-22T06:31:23-0700",
    //                "description": "2017 Honda Civic",
    //                "author": {
    //                "@type": "Person",
    //                    "name": "By Byron Mathioudakis, with Tony O'Kane and WhichCar staff"
    //            },
    //            "publisher": {
    //                "@type": "Organization",
    //                    "@id": "Bauer Media Pty Limited"
    //            },
    //            "image": {
    //                "@type": "ImageObject",
    //                    "url": "https://d3lp4xedbqa8a5.cloudfront.net/imagegen/max/ccr/1023/-/s3/digital-cougar-assets/whichcar/2017/06/27/2643/Honda-Civic-VTi-LX-Hatch-2017-drive-WIDE.jpg",
    //                    "width": 700,
    //                    "height": 500
    //            },
    //            "reviewRating": {
    //                "@type": "Rating",
    //                    "worstRating": 0,
    //                    "bestRating": 5,
    //                    "ratingValue": 4
    //            }
    //        }
    //    }
    //    }
    //}
};
