/*

*/

describe('Actions Demo', function(){
  

    it('Open Posse website', function(){


        browser.get('http://www.posse.com');

        element(by.model("userInputQuery")).sendKeys("coffee");
        //browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();

        //browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
     
        element(by.xpath("//span[@class='glyphicon glyphicon-search']")).click().then(function()
        {
            
            browser.sleep(5000);

        })


    })


})