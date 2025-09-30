describe("WebdriverIO main page", () => {
    it("should go to GitHub homepage, click Sign up, wait for form, and fill fields", async () => {
    
    await browser.url('https://github.com')
    await browser.pause(1000)

    
    const signUpButton = await $('header a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')
    await signUpButton.waitForClickable({ timeout: 5000 })
    await signUpButton.click()
    await browser.pause(1000)

    
    const formFields = await $('#signup-form-fields')
    await browser.waitUntil(async () => {
        return await formFields.isDisplayed()
    }, 
    {
        timeout: 7000,
        interval: 500,
        timeoutMsg: 'Форма регистрации не появилась'
    })
    console.log("Форма регистрации появилась")

    
    const emailInput = await $('#email')
    await emailInput.setValue('testuserukr777@example.com')
    await browser.pause(1000)

    
    const passwordInput = await $('#password')
    await passwordInput.setValue('SuperSSSPassword125!')
    await browser.pause(1000)

    
    const usernameInput = await $('#login')
    await usernameInput.setValue('sergey789')
    await browser.pause(1000)

    console.log("Поля заполнены")
  })

})

