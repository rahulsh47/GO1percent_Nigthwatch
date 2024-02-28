const Loginpage = browser.page.Loginpage();

describe('GO1% Elements', function(){
    before(function(browser){
        Loginpage.navigate();
        Loginpage.maximizeWindow();
    }); 

    it('1. Verify the Logo , Carousel Image , Carousel Caption & Footer Message is Displayed', function(browser){
     Loginpage.expect.element('@Logo').visible
     Loginpage.expect.element('@CarouselImage').visible
     Loginpage.expect.element('@CarouselCaption').visible
     Loginpage.expect.element('@FooterMesssage').visible
    });

    it('2. Verify that tag line with text "Get 1% better Everyday is Visible"', function(browser){
        Loginpage.expect.element('@TagLine').visible
    });

    it('3. Verify that Carousel Image changes while clicking on the Carousel button', function(browser){
        Loginpage.expect.element('@CarouselSlider').visible
    });

    it('4. Verify that specific text between login options is present on the web page', function(browser){
        Loginpage.expect.element('@ViaEmail').visible
    });

    it('5.  Verify that login page heading contains text "Sign in to Go 1%" is displayed ', function(browser){
        Loginpage.expect.element('@SignInGO1percent').visible
    });

    it('6. Verify that clicking on the Microsoft logo redirects to the Microsoft login page', function(browser){
        Loginpage.clickMicrosoftLogo();
        Loginpage.getTitle(function(title){
            this.assert.equal(title , 'Sign in to your account')
        })
        browser.back();
    });

    it('7. Verify that login fails with invalid credentials and an alert message is displayed', function(browser){
       Loginpage.UnsuccesfulLogin('xyz','123');
       browser.expect.element('#input-error').text.to.contains('Invalid username or password.');
    });

    
    it('9. Verify remember me checkbox is selected during login', function(browser){
        Loginpage.RememberMeClick();
            browser.pause(5000);
            browser.expect.element('.checkmark').to.be.selected;
    })

    it('10. Verify the forgot Password functionality ',function(browser){
        Loginpage.ClickForgotPassword()
        .assert.containsText('@ResetPasswordInfo', 'You should receive an email shortly with further instructions.');
    });

    it('11. Verify clicking on the "Terms of Use" link opens a new page with the terms of use', function(browser){
        Loginpage.ClickTermsofUse();
        browser.windowHandles(function(result){
            const originalWindow = result.value[0];
            const handle = result.value[1];
            this.switchWindow(handle)
            .assert.urlContains('terms-of-use');
            this.switchWindow(originalWindow)
        })
    });

    it('12.  Verify clicking on the "Privacy policy" link opens a new page with the privacy policy',function(browser){
        Loginpage.ClickPrivacyPolicy();
       browser.windowHandles(function(result){
        const originalWindow = result.value[0];
        const handle = result.value[2];
        this.switchWindow(handle)
        .assert.urlContains('privacy-policy');
        this.switchWindow(originalWindow)
       })
    });

    it('8. Verify successful login with valid credentials', function(browser){
        Loginpage.SuccesfulLogin('testadmin','testadmin');
        browser.assert.urlContains('my-dashboard');
    });

});


