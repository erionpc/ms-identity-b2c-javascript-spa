/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SIGNUP_SIGNIN",
        editProfile: "B2C_1A_PROFILEEDIT"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://eppersonaldevb2c.b2clogin.com/eppersonaldevb2c.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN",
        },
        editProfile: {
            authority: "https://eppersonaldevb2c.b2clogin.com/eppersonaldevb2c.onmicrosoft.com/B2C_1A_PROFILEEDIT"
        }
    },
    authorityDomain: "eppersonaldevb2c.b2clogin.com"
}