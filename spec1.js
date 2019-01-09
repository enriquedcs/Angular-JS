describe('Protractor baby steps', function() {

    it('Open Angular js website', function() {
        
        browser.get('https://angularjs.org');

        browser.get('http://juliemr.github.io/protractor-demo/').then(function()
        {

            console.log("I am the last step to execute")
        })
        
        

    })

    it('Close browser', function() {
        
        //code to close browser
    })

} )

// first parameter - Test suite name
    // Second parameter - function (function will have all test (it blocks))
