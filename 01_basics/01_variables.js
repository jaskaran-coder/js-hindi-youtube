const accountId = 144553
let accountEmail = "jask@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

/*
Prefer not to use var
because of issue in block scope and functional scope*/

// accountId = 212121
accountEmail = "hello@gmail.com"
accountPassword = "101010"
accountCity = "Bengluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])