describe("WebdriverIO main page", () => {

    
it("should go from homepage to API, scroll to API Reference, verify it, and click Protocols", async () => {
    
    await browser.url('https://webdriver.io')
    await browser.pause(1000)

    
    const menuButton = await $('button[class*="nav-bar__toggle"]')
    if (await menuButton.isDisplayed()) {
        await menuButton.click()
        await browser.pause(500)
    }

    //API
    const apiLink = await $('nav a[href="/docs/api"]')
    await apiLink.waitForClickable({ timeout: 5000 })
    await apiLink.click()
    await browser.pause(1000)

    
    const apiRefLink = await $('footer a[href="/docs/api"]')
    await apiRefLink.waitForExist({ timeout: 5000 })

    //Проскроллить 
    await apiRefLink.scrollIntoView({ block: 'center', inline: 'nearest' })
    await browser.pause(2000)
    

    //кликабельна ли
    expect(await apiRefLink.isDisplayed()).toBe(true)
    expect(await apiRefLink.isClickable()).toBe(true)

    
    const html = await apiRefLink.getHTML()
    console.log("HTML API Reference:", html)

    
    await apiRefLink.click()
    await browser.pause(1000)

    
    const nextLink = await $('a.pagination-nav__link--next[href="/docs/api/protocols"]')
    await nextLink.waitForExist({ timeout: 5000 })

    
    await nextLink.scrollIntoView({ block: 'center', inline: 'nearest' })
    await browser.pause(4000)

    
    await nextLink.click()
    await browser.pause(1000)

    
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('/docs/api/protocols')
    console.log("✅ Перешли на Protocols:", currentUrl)

    
    await browser.pause(3000)

    const heading = await $('#webdriver-protocol')
    const isVisible = await heading.isDisplayed()

    if (isVisible) {
    console.log("Заголовок WebDriver Protocol отображается")
    } 
    else {
    console.log("Заголовок WebDriver Protocol не найден")
    }


    })
})
    

