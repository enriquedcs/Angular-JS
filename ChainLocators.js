/*

*/

describe('Chain Locators demo', function(){

    it('Locators', function(){


        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, And css for identical tags
        // when ever u see ng-repeat must be used a repeater
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("2");
        element(by.id("gobutton")).click();

        element.all(by.repeater("result in memory")).count().then(function(text){

            console.log(text);

        })
        element.all(by.repeater("result in memory")).each(function(item)
        {

            item.element(by.css("td:nth-child(3)")).getText().then(function(text){

                console.log(text);

            })

        })


    })


})