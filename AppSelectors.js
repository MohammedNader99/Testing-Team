exports.EmailID = "email";
exports.PasswordID = "pass";
exports.loginId="u_0_b";
//////////////////////////////////////////
///////SignUpSelectors All by Xpath//////
exports.SignUpbutton="//a[@href='/signup']";
exports.SignUpEmail="//input[@id='email']";
exports.SignUpConfirmEmail="//input[@id='confirm-email']";
exports.SignUpPassword="///input[@id='password']";
exports.SignUpDispName="//input[@id='username']";
exports.SignUpDayOfBirth="//input[@id='day']";
exports.SignUpMonthOfBirth="//select[@id='month']";
exports.SignUpMonthOfBirthNovember="//*[@id='month']/option[12]";
exports.SignUpyearOfBirth="//input[@id='year']";
exports.SignUpFemaleGender="//input[@value='female']";
exports.SignUpAccountType="//*[@id='account-type']/select";
exports.SignUpAccountTypeReg="//*[@id='account-type']/select/option[2]";
exports.SignUpAccountTypePrem="//*[@id='account-type']/select/option[3]";
exports.SignUpAccountTypeArtist="//*[@id='account-type']/select/option[4]";
exports.SignUpSubmitButton="//button[@id='signup-button']";
//////////////////////////////////////////////////
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
exports.HelpPageButton="//a[@href='/help']";
exports.AccountHelpButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[1]";
exports.PaymentHelpButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[2]";
exports.SubscriptionOptionsButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[3]";
exports.PrivacyAndSecurityButton="//*[@id='root']/div/div/div[3]/div/div/div[1]/p[4]";
exports.VideotutorialsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[1]";
exports.GettingstartedButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[2]";
exports.PlaylistsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[3]";
exports.FeaturesButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[4]";
exports.SystemAndsettingsButton="//*[@id='root']/div/div/div[3]/div/div/div[2]/p[5]";
exports.SpeakersButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[1]";
exports.TVsButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[2]";
exports.CarsButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[3]";
exports.GamingButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[4]";
exports.SmartWatchesButton="//*[@id='root']/div/div/div[3]/div/div/div[3]/p[5]";
exports.GetSpotifyButton="//a[@href='/signup/']";
exports.BacktoHelpButton="";
//////////////////////////////////////////////////////////////


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



