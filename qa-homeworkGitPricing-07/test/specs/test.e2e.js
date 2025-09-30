describe("WebdriverIO main page", () => {
    it("should go from GitHub main page to Pricing and Compare features", async () => {
    
    await browser.url('https://github.com')
    await browser.pause(3000)

    
    const pricingLink = await $('a[href="/pricing"]')
    await pricingLink.waitForClickable({ timeout: 5000 })
    await pricingLink.click()
    await browser.pause(3000)

    
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('https://github.com/pricing')
    await browser.pause(3000)

    
    const pricingHeader = await $('main h1')
    const pricingText = await pricingHeader.getText()
    expect(pricingText).toContain('Try the Copilot-powered platform')
    await browser.pause(3000)

    
    const compareLink = await $('main div.mt-6.mt-md-7 > a')
    await compareLink.scrollIntoView()
    await browser.pause(3000)

    
    await compareLink.waitForClickable({ timeout: 3000 })
    await compareLink.click()
    await browser.pause(3000)

    
    const compareHeader = await $('main div.js-compare-features-item > h1')
    const compareText = await compareHeader.getText()
    expect(compareText).toContain('Compare features')
    await browser.pause(3000)
})
})

