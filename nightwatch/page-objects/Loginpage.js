module.exports = {
    url : 'https://nashtechglobal.qa.go1percent.com/',
    elements: {
        Logo: {
            selector: '.go1up-logo',
            locateStrategy: 'css selector',
        },
        CarouselImage: {
            selector: '#myCarousel > div > div:nth-child(1) >img',
            locatorStrategy: 'css selector',
        },
        CarouselCaption: {
            selector: '#myCarousel > div > div:nth-child(1) > div > p',
            locatorStrategy: 'css selector',
        },
        FooterMesssage:{
            selector: '.tagsss',
            locatorStrategy: 'css selector'
        },
        TagLine:{
            selector: 'div[class="item active"] h3',
            locateStrategy: 'css selector'
        },
        CarouselSlider:{
            selector: '#myCarousel > ol > li:nth-child(4)',
            locatorStrategy: 'css selector',
        },
        ViaEmail: {
            selector: 'div[id="kc-social-providers"] h4',
            locatorStrategy: 'css selector',
        },
        SignInGO1percent: {
            selector: '#kc-page-title',
            locatorStrategy: 'css selector',
        },
        MicrosoftLogo: {
            selector: '.social-fontawesom-icons',
            locatorStrategy: 'css selector',
        },
        Username: {
            selector: '#username',
            locatorStrategy: 'css selector',
        },
        Password: {
            selector: '#password',
            locatorStrategy: 'css selector',
        },
        SignInButton: {
            selector: '#kc-login',
            locatorStrategy: 'css selector',
        },
        InputErrorMessage: {
            selector: '#input-error',
            locatorStrategy: 'css selector',
        },
        RememberMeBtn: {
            selector: '.checkmark',
            locatorStrategy: 'css selector',
        },
        ForgotPassword: {
            selector: 'a[tabindex="5"]',
            locateStrategy: 'css selector',
        },
        Email: {
            selector: '#username',
            locatorStrategy: 'css selector',
        },
        SubmitButton: {
            selector: 'input[value="Submit"]',
            locatorStrategy: 'css selector',
        },
        ResetPasswordInfo: {
            selector: '.pf-c-alert__title.kc-feedback-text',
            locatorStrategy: 'css selector',
        },
        TermsOfUse: {
            selector: 'a:nth-child(1) b:nth-child(1)',
            locatorStrategy: 'css selector',
        },
        PrivacyPolicy: {
            selector: 'a:nth-child(2) b:nth-child(1)',
            locateStrategy: 'css selector',
        },
    },
    
    commands: [
        {
           clickSlider(){
            return this.waitForElementVisible('#myCarousel > ol > li:nth-child(4)', 2000)
           },
           clickMicrosoftLogo(){
            return this
                .waitForElementVisible('@MicrosoftLogo',5000)
                .click('@MicrosoftLogo')
           },
           UnsuccesfulLogin : function(username , password){
            return this
                .setValue('@Username', username)
                .setValue('@Password', password)
                .click('@SignInButton')
           },
           SuccesfulLogin : function(username , password){
            return this
                .setValue('@Username', username)
                .setValue('@Password', password)
                .click('@SignInButton')
           },
           RememberMeClick : function(){
            return this
                .waitForElementVisible('@RememberMeBtn',5000)
                .click('@RememberMeBtn')
           },
           ClickForgotPassword: function(){
            return this
                .waitForElementVisible('@ForgotPassword',5000)
                .click('@ForgotPassword')
                .setValue('@Email','abc@gmail.com')
                .click('@SubmitButton')
                browser.back();
           },
           ClickTermsofUse: function(){
            return this 
                .waitForElementVisible('@TermsOfUse', 5000)
                .click('@TermsOfUse')
           },
           ClickPrivacyPolicy: function(){
            return this
                .waitForElementVisible('@PrivacyPolicy',5000)
                .click('@PrivacyPolicy')
           },
        }
    ],
};


