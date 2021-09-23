import{browser, by, element} from "protractor";

export class calculatorPage {
    pageTitle = element(by.xpath('//div//h3'))
    firstNumber = element(by.model('first'))
    secondNumber = element(by.model('second'))
    
    additionOperator = element(by.css('[ng-model="operator"]'))
    subtractionOperator = element(by.css('[ng-model="operator"]'))
    divisionOperator = element(by.css('[ng-model="operator"]'))
    multiplicationOperator = element(by.css('[ng-model="operator"]'))
    modulesOperator = element(by.css('[ng-model="operator"]'))

    goButton = element(by.id('gobutton'))
    result = element(by.xpath('h2'))


    getTitle(){
        return this.pageTitle.getText()
        browser.sleep(5000)
    }

    setFirstNumber(){
        this.firstNumber.sendKeys('5')
    }

    setAdditionOperator(){
        this.additionOperator.element(by.xpath ("//option[. = '+']")).click()
    }

    setSubtractionOperator(){
        this.subtractionOperator.element(by.xpath ("//option[. = '-']")).click()
    }

    setDivisionOperator(){
        this.divisionOperator.element(by.xpath ("//option[. = '/']")).click()
    }

    setMultiplicationOperator(){
        this.multiplicationOperator.element(by.xpath ("//option[. = '*']")).click()
    }

    setModulesOperator(){
        this.modulesOperator.element(by.xpath ("//option[. = '%']")).click()
    }

    setSecondNumber(){
        this.secondNumber.sendKeys('7')
    }
    async clickGoButton (){
        await this.goButton.click()
    }
    async getResult(){
      return  await this.result.getText()
    }
}