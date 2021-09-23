import { browser } from "protractor";
import { calculatorPage } from "../pages/superCalculatorPage";

let calculator = new calculatorPage();

describe('Calculator Test', function(){
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/')
    })

    it('Title Check', function(){
        expect(calculator.getTitle()).toContain("Super Calculator")

        browser.sleep(2000);

      
    })

    it('Addition Test', function(){
        calculator.setFirstNumber()
        calculator.setAdditionOperator()
        calculator.setSecondNumber()
        calculator.clickGoButton()
        expect(calculator.getResult()).toContain("1")

        browser.sleep(2000);
    })

    it('Subtraction Test', function(){
        calculator.setFirstNumber()
        calculator.setSubtractionOperator()
        calculator.setSecondNumber()
        calculator.clickGoButton()
        expect(calculator.getResult()).toContain("-2")

        browser.sleep(2000);
    })

    it('Division Test', function(){
        calculator.setFirstNumber()
        calculator.setDivisionOperator()
        calculator.setSecondNumber()
        calculator.clickGoButton()
        expect(calculator.getResult()).toContain("0.7142857142857143")

        browser.sleep(2000);
    })

    it('Multiplication Test', function(){
        calculator.setFirstNumber()
        calculator.setMultiplicationOperator()
        calculator.setSecondNumber()
        calculator.clickGoButton()
        expect(calculator.getResult()).toContain("35")

        browser.sleep(2000);
    })

    it('Modulus Test', function(){
        calculator.setFirstNumber()
        calculator.setModulesOperator()
        calculator.setSecondNumber()
        calculator.clickGoButton()
        expect(calculator.getResult()).toContain("5")

        browser.sleep(2000);
    })


})