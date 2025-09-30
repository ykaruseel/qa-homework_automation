describe("WebdriverIO main page", () => {
    it("should navigate to API, verify content, search and clear", async () => {
    
    await browser.url('https://webdriver.io')
    await browser.pause(2000)

    // Проверяем
    const icon = await $('button[class*="navbar__toggle"]')
    if (await icon.isDisplayed()) {
        await icon.click()
        await browser.pause(1000)
    }

    //API
    const apiLink = await $('a[href="/docs/api"]')
    await apiLink.waitForClickable({ timeout: 5000 })
    await apiLink.click()
    await browser.pause(2000)

    //URL
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api')

    
    const introTitle = await $('article h1')
    await expect(introTitle).toHaveText('Introduction')
    await browser.pause(1000)

    
    const introParagraph = await $('article p')
    const paragraphText = await introParagraph.getText()
    console.log("Intro paragraph:", paragraphText)
    expect(paragraphText).toContain('WebDriver')
    await browser.pause(1000)

    //WebDriver это вообше ссылка?
    const webdriverLink = await $('article p a')
    const href = await webdriverLink.getAttribute('href')
    console.log("WebDriver link href:", href)
    expect(href).toContain('webdriver')
    await browser.pause(1000)

    
    const searchButton = await $('button.DocSearch-Button')
    await searchButton.waitForClickable({ timeout: 5000 })
    await searchButton.click()
    await browser.pause(1000)

    
    const searchInput = await $('#docsearch-input')
    await searchInput.setValue('all is done')
    await browser.pause(2000)

    
    const clearButton = await $('button[aria-label="Clear the query"]')
    await clearButton.waitForClickable({ timeout: 5000 })
    await clearButton.click()
    await browser.pause(2000)
})
 
})