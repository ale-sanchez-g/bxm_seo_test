Feature: I am able to validate my schema for SEO

  Scenario: I am able to validate my schema using the google structured-data tool
    Given I navigate to "https://search.google.com/structured-data/testing-tool"
    When I submit a validation for my schema
    """
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "@id":"#website",
        "url": "http://now-site.test.bxm.net.au/",
        "name": "Now To Love",
        "sameAs": [
          "https://www.facebook.com/nowtolove",
          "https://twitter.com/NowToLove",
          "https://www.instagram.com/NowToLove/"
        ],
        "potentialAction": {
        "@type": "SearchAction",
        "target": "http://now-site.test.bxm.net.au/tags/{search_term_string}",
        "query-input": "required name=search_term_string"
        }
      }
    </script>
    """
    Then I can see there are no Errors or Warning in the validation output

  Scenario: I am able to validate my Article schema using the google structured-data tool
    Given I navigate to "https://search.google.com/structured-data/testing-tool"
    When I submit a validation for my schema
    """
    <script type="application/ld+json">
    {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "http://now-site.test.bxm.net.au/fashion/models/kendall-jenners-skin-doctor-tells-us-what-mistake-3640"
            },
            "headline": "Kendall Page Title | Now To Love",
            "image": {
                "@type": "ImageObject",
                "url": "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Dolly/2016/01/13/72089/kendallllllzzz-(1).jpg",
                "height": 800,
                "width": 800
            },
            "datePublished": "2016-01-02T13:35:00.00Z",
            "dateModified": "2016-01-02T13:35:00.00Z",
            "author": {
                "@type": "Person",
                "name": "Emily Jabour"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Now To Love",
                "logo": {
                    "@type": "ImageObject",
                    "url": "http://www.nowtolove.com.au/assets/images/menulogos/NTL-logo.png",
                    "width": 600,
                    "height": 60
                }
            },
            "description": "Kendal Meta Description"
        }
    </script>
    """
    Then I can see there are no Errors or Warning in the validation output

  Scenario: I am able to validate my schema using the google structured-data tool
    Given I navigate to "https://search.google.com/structured-data/testing-tool"
    When I submit "http://www.nowtolove.com.au" url to be validated
    Then I can see there are no Errors or Warning in the validation output

  @watch
  Scenario: I can to ensure my schema matched Google expectations
    Given I a have an NewsArticle schema
    * I can ensure the below properties are populated to be AMP ready
    | Properties            |
    | mainEntityOfPage      |
    | headline              |
    | image.url             |
    | image.height          |
    | image.width           |
    | publisher             |
    | publisher.name        |
    | publisher.logo        |
    | publisher.logo.url    |
    | publisher.logo.height |
    | publisher.logo.width  |
    | datePublished         |
    | dateModified          |
    | author                |
    | author.name	        |
    | description           |

