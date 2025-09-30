describe("WebdriverIO main page", () => {
    it("should search for 'act' on GitHub and verify it appears in repository card", async () => {
    
    await browser.url('https://github.com')
    await browser.pause(3000)

    
    const searchButton = await $('header qbsearch-input button span')
    await searchButton.click()
    await browser.pause(900)

    
    const searchInput = await $('#query-builder-test')
    await searchInput.setValue('act')
    await browser.keys('Enter')
    await browser.pause(5000)

    
    const resultCard = await $('main h3 a span')
    const resultText = await resultCard.getText()

    if (await resultCard.isDisplayed() && resultText.toLowerCase().includes('act')) {
        console.log("Слово 'act' найдено в карточке репозитория:", resultText)
    } else {
        console.log("Слово 'act' не найдено в результатах поиска")
    }
})
})

