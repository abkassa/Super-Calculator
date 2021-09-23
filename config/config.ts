import{Config, browser} from "protractor"

export let config: Config ={
framework: "jasmine",
capabilities: {
  browserName: 'chrome',
  chromeOptions: {
    args: ["--incognito"]
  },
  specs: [
    '../src/testcases/superCalculator.js'
    
  ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  useAllAngular2AppRoots: true,
  onPrepare: function(){
    browser.driver.manage().window().maximize();
  }
}
}