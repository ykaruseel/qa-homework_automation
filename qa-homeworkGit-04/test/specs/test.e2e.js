describe("WebdriverIO main page", () => {
    it("should go to GitHub, open Philips case, start trial and fill Enterprise form", async () => {
    
    await browser.url('https://github.com')
    await browser.pause(1000)

    
    const customerHeading = await $('#customer-stories h2 span')
    await customerHeading.scrollIntoView()
    await browser.pause(1000)

    
    if (await customerHeading.isDisplayed()) {
        console.log("Заголовок Customer Stories отображается")
    } else {
        console.log("Заголовок Customer Stories не найден")
    }

    
    const bySizeButton = await $('#customer-stories button:nth-child(3)')
    if (await bySizeButton.isClickable()) {
        await bySizeButton.click()
        console.log("Кнопка By size нажата")
        await browser.pause(1000)
    } else {
        console.log("Кнопка By size не кликабельна")
    }

    
    const philipsCard = await $('#customer-stories div:nth-child(5) div:nth-child(2) a span span div.lp-CustomerStories-container')
    await philipsCard.scrollIntoView()
    await browser.pause(500)
    await philipsCard.click()
    await browser.pause(2000)

    
    const currentUrl = await browser.getUrl()
    expect(currentUrl).toContain('/customer-stories/philips')
    console.log("Перешли на страницу Philips:", currentUrl)

    const philipsHeading = await $('main h1')
    const headingText = await philipsHeading.getText()
    if (await philipsHeading.isDisplayed() && headingText.includes('Philips builds and deploys digital health technology')) {
        console.log("Заголовок Philips отображается корректно")
    } else {
        console.log("Заголовок Philips не найден или некорректный")
    }

    
    await browser.pause(2000)
    const trialButton = await $('a[href*="enterprise_plan"]')
    if (await trialButton.isDisplayed()) {
        console.log("Кнопка Start a free trial найдена")
        await trialButton.click()
        await browser.pause(2000)
    } else {
        console.log("Кнопка Start a free trial не найдена")
    }

    
    const trialHeading = await $('main h1')
    const trialText = await trialHeading.getText()
    if (await trialHeading.isDisplayed() && trialText.includes('Pick your trial plan')) {
        console.log("Заголовок Pick your trial plan отображается")
    } else {
        console.log("Заголовок Pick your trial plan не найден")
    }

    
    const serverCard = await $('main div:nth-child(2) div:nth-child(2) a div div')
    await serverCard.scrollIntoView()
    await browser.pause(500)
    await serverCard.click()
    await browser.pause(2000)

    
    const serverHeading = await $('div.container-lg h1')
    const serverText = await serverHeading.getText()
    if (await serverHeading.isDisplayed() && serverText.includes('Enterprise Server')) {
        console.log("Заголовок Enterprise Server отображается")
    } else {
        console.log("Заголовок Enterprise Server не найден")
    }

    
    await $('#contact_request_name').setValue('Serhii Kovalenko')
    await browser.pause(500)

    
    await $('#contact_request_organization_name').setValue('Test Squad')
    await browser.pause(500)

    
    await $('#contact_request_email').setValue('serhii777@example.com')
    await browser.pause(500)

    
    await $('#contact_request_phone').setValue('+48123456789')
    await browser.pause(500)

    
    const countrySelect = await $('#contact_request_country')
    await countrySelect.selectByVisibleText('Andorra')
    await browser.pause(500)

    
    const azureOption = await $('#contact_request_instance_type_azure')
    await azureOption.click()
    await browser.pause(500)

    console.log("Форма запроса Enterprise Server заполнена")
})
})

