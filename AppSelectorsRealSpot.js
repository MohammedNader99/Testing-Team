exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
///////SignUpSelectors All by Xpath//////
exports.SignUpbutton="//a[@data-ga-action='sign-up']";
exports.SignUpEmail="//input[@id='register-email']";
exports.SignUpConfirmEmail="//input[@id='register-confirm-email']";
exports.SignUpPassword="//input[@id='register-password']";
exports.SignUpDispName="//input[@id='register-displayname']";
exports.SignUpDayOfBirth="//input[@id='register-dob-day']";
exports.SignUpMonthOfBirth="//select[@id='register-dob-month']";
exports.SignUpMonthOfBirthNovember="//option[@value='11']";
exports.SignUpyearOfBirth="//input[@id='register-dob-year']";
exports.SignUpFemaleGender="//input[@id='register-female']";
exports.SignUpSubmitButton="//a[@id='register-button-email-submit']";
///////SignUpErrorMsgsSelectors All by Xpath//////
exports.SignUpInvalidEmailmsg="//*[@id='js-register-with-email']/fieldset/ul/li[1]/label[2]";
exports.SignUpInvalidConfirmEmailmsg="//*[@id='js-register-with-email']/fieldset/ul/li[2]/label[2]";
exports.SignUpInvalidPasswordmsg="//*[@id='js-register-with-email']/fieldset/ul/li[3]/label[2]";
exports.SignUpInvalidDispNamemsg="//*[@id='js-register-with-email']/fieldset/ul/li[4]/label[2]";
exports.SignUpInvalidDayOfBirthmsg="//*[@id='li-dob']/label[2]";
exports.SignUpInvalidMonthOfBirthmsg="//*[@id='li-dob']/label[3]";
exports.SignUpInvalidyearOfBirthmsg="//*[@id='li-dob']/label[4]";
exports.SignUpInvalidGendermsg="//*[@id='li-gender']/label[4]";
/////////////////////////////////////////////////////////////////
////////////////HelpPageSelectors All by Xpath//////////////////
exports.HelpPageButton="/html/body/div[2]/div/header/div/nav/ul/li[2]/a";
exports.AccountHelpButton="//a[@data-ga-event-action='account_help']";
exports.PaymentHelpButton="//a[@data-ga-event-action='payment_help']";
exports.SubscriptionOptionsButton="//a[@data-ga-event-action='subscription_options']";
exports.PrivacyAndSecurityButton="//a[@data-ga-event-action='privacy']";
exports.VideotutorialsButton="//a[@data-ga-event-action='video_tutorials']";
exports.GettingstartedButton="//a[@data-ga-event-action='getting_started']";
exports.PlaylistsButton="//*[@id='navigation']/div/div/div/div/div[2]/ul/li[3]/a";
exports.FeaturesButton="//a[@data-ga-event-action='features']";
exports.SystemAndsettingsButton="//a[@data-ga-event-action='system_settings']";
exports.SpeakersButton="//a[@data-ga-event-action='on_speaker']";
exports.TVsButton="//a[@data-ga-event-action='on_tv']";
exports.CarsButton="//a[@data-ga-event-action='in_the_car']";
exports.GamingButton="//a[@data-ga-event-action='gaming']";
exports.SmartWatchesButton="//a[@data-ga-event-action='smart_watches']";
exports.GetSpotifyButton="//*[@id='using-spotify']/div/div/div[2]/a";
exports.BacktoHelpButton="//*[@id='nav-link-help']";
//////////////////////////////////////////////
////////////////PremiumPageSelectors All by Xpath//////////////////
exports.Premiumbutton="//a[@data-ga-action='premium']";
exports.GetPremiumbutton="//*[@id='HERO-0']/article/header/div/div[4]/div/a/span";
exports.GetPremiumbuttonAtTheEndOfThePage="//*[@id='PLANS']/article/article[1]/article/a";



//////////////////////////////////////////////
//Log in Selectors
exports.SignInbuttonXbath = "//a[contains(text(),'Log In')]";

exports.EmailID = "login-username";
exports.PasswordID = "login-password";
exports.RememberMeCss = ".checkbox > .ng-binding";
exports.LoginID = "login-button";

exports.NoEmailOrUsernameEnteredXpath = "//*[@name='$parent.accounts']/div/div/div/label";
exports.NoPasswordEnteredXpath = "//*[@name='$parent.accounts']/div[2]/div/div/label";
exports.IncorrentUsernameOrPasswordXpath = "//*[@class='content']/div[2]/div/p/span";

//Log out Selectors
exports.ProfileTitleCss = ".mh-profile-title";
exports.LogoutLinkText = "Log Out";

//Edit Profile Selectors
exports.EditProfileButtonXbath ='//*[@id="account-csr-container"]/div/article[1]/div/a';

exports.EditProfileEmailXbath = '//*[@id="profile_email"]';
exports.EditProfileEmailMsgErrorXbath ='//*[@id="profile"]/div[1]/label[2]';

exports.EditProfileGenderXbath ='//*[@id="profile_gender"]';

exports.EditProfileDayOfBirthXbath = "//select[@id='profile_birthdate_day']/option[@value='1']";
exports.EditProfileMonthOfBirthXbath ="//select[@id='profile_birthdate_month']/option[@value='2']";
exports.EditProfileYearOfBirthXbath = "//select[@id='profile_birthdate_year']/option[@value='2001']";

exports.EditProfileMobileNumberXbath = '//*[@id="profile_mobile_number"]';

exports.EditProfileSaveButton = '//*[@id="profile_save_profile"]';
exports.EditProfileCancelButton = '//*[@id="profile_cancel"]';

exports.EditProfilePasswordMsgErrorXbath = '//*[@id="profile"]/div[1]';
exports.EditProfilePasswordXbath ='//*[@id="profile_confirmPassword"]';

exports.EditProfileSuccessMessageXbath ='/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div/div[1]/div[1]';

//Change Password Selectors
exports.ChangePasswordButtonXpath='//*[@id="submenu-item-change-password"]';
exports.ChangePasswordCurrentXpath = '//*[@id="change_password_validatePassword"]';
exports.ChangePasswordNewXpath = '//*[@id="change_password_new_password"]';
exports.ChangePasswordNewValidXpath = '//*[@id="change_password_check_password"]';
exports.ChangePasswordSetPasswordButton ='//*[@id="change_password_submit"]'
exports.ChangePasswordCurrentErrorXpath='//*[@id="change_password"]/div[1]/div/div/label[2]'
exports.ChangePasswordNewErrorXpath = '//*[@id="change_password"]/div[2]/div/div/label[2]';
