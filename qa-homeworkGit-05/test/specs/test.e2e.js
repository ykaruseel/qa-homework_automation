describe("WebdriverIO main page", () => {
    it("should subscribe to GitHub developer newsletter and verify confirmation", async () => {
    
    await browser.url('https://github.com')
    await browser.pause(1000)

    
    const newsletterBlock = await $('#subscribe-to-newsletter')
    await newsletterBlock.scrollIntoView()
    await browser.pause(1000)

    
    const subscribeFooterBtn = await $('footer a.btn-mktg.mb-4.btn-muted-mktg')
    if (await subscribeFooterBtn.isClickable()) {
        await subscribeFooterBtn.click()
        console.log("Кнопка Subscribe нажата")
        await browser.pause(2000)
    } else {
        console.log("Кнопка Subscribe не кликабельна")
    }

    
    const newsletterHeading = await $('#hero-section-brand-heading')
    const headingText = await newsletterHeading.getText()
    if (await newsletterHeading.isDisplayed() && headingText.includes('Subscribe to our developer newsletter')) {
        console.log("Заголовок на странице подписки отображается")
    } else {
        console.log("Заголовок на странице подписки не найден")
    }

    
    const emailInput = await $('#\\:R11h76\\:')
    await emailInput.scrollIntoView()
    await emailInput.setValue('serhii777@example.com')
    await browser.pause(500)

    
    const countrySelect = await $('#country')
    await countrySelect.selectByVisibleText('Austria')
    await browser.pause(500)

    
    const marketingCheckbox = await $('#gated-agree-marketingEmailOptin1')
    await marketingCheckbox.click()
    await browser.pause(500)

    
    const finalSubscribeBtn = await $('#form > form > div > button')
    await finalSubscribeBtn.click()
    await browser.pause(2000)

    
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('/confirmation')
    console.log("Перешли на страницу подтверждения:", currentUrl)

    
    const confirmHeading = await $('#hero-section-brand-heading')
    const confirmText = await confirmHeading.getText()
    if (await confirmHeading.isDisplayed() && confirmText.includes('Thanks for subscribing!')) {
        console.log("Заголовок подтверждения отображается")
    } else {
        console.log("Заголовок подтверждения не найден")
    }
})
})


