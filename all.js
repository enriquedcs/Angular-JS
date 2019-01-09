/*

*/

describe('Chain Locators demo', function(){
    function Add(a,b)
    {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }

    it('Locators', function(){


        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, And css for identical tags
        // when ever u see ng-repeat must be used a repeater
        Add(3,4);
        Add(4,5);
        Add(5,8);
        Add(5,9);
        Add(1,9)

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