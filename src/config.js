// конфигурационни константи

// годината спрямо която определяме какъв ще бъде типът на потребителя

const CONFIGURATION_CUSTOMER_YEAR = 1965;

var globalConfig = {                                // създаваме обект (блок, в който живеят променливи (микро неймспейс))
    isCustomerAdult : false,                        // създаваме обект (блок, в който живеят променливи (микро неймспейс))
    customerAge : -1,                                // създаваме обект (блок, в който живеят променливи (микро неймспейс))

    // setCustomerAge : function()
    // setCustomerAge: () => {
        
    // }
    setCustomerAge(age) {
        globalConfig.isCustomerAdult    = age >= 18;
        globalConfig.
    }
}                                                   // създаваме обект (блок, в който живеят променливи (микро неймспейс))
