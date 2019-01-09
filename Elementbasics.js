/*

*/

describe('Protractor Element Demo', function(){

    it('Locators', function(){

        //To use on NonAngular webpages
        //browser.waitForAngularEnabled(false);
        //browser.get("http://www.google.com")
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        //element(by.model("operator"))
        element(by.model("second")).sendKeys("5");
        //tagname[attribute='value']
        element(by.id("gobutton")).click();
        //jasmine takes care of promise resolve
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

        element(by.css("h2[class='ng-binding']")).getText().then(function(text){

            console.log(text);

        })


    })


})