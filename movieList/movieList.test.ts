import { Builder, Capabilities, By } from "selenium-webdriver"

import { beforeAll, afterAll, test } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

let movie = "Hot Rod"

test('Add Movie', async () => {
    let inputField = await driver.findElement(By.xpath('//input')) 
    let addButton = await driver.findElement(By.xpath('//button'))

    await inputField.sendKeys(movie)
    await driver.sleep(2000)

    await addButton.click()
    await driver.sleep(2000)
})

test('Cross Out Movie', async () => {
    let movieName = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))

    await movieName.click()
    await driver.sleep(2000)
})

let movieTitle = movie.split(" ").join("")

test('Delete Movie', async () => {
    let deleteMovie = await driver.findElement(By.id(movieTitle)) 

    await deleteMovie.click()
    await driver.sleep(2000)
})
