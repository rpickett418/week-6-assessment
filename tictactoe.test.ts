import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('upper left square should add an X', async () => {
    await driver.findElement(By.xpath('/html/body/table/tbody/tr[1]/td[1]')).click()

    await driver.sleep(2000)
})

test(' upper right square to add X', async () => {
    await driver.findElement(By.xpath('/html/body/table/tbody/tr[3]/td[3]')).click()

    await driver.sleep(2000)
})

test('bottom left square to add X', async () => {
    await driver.findElement(By.xpath('/html/body/table/tbody/tr[3]/td[1]')).click()

    await driver.sleep(2000)

})



