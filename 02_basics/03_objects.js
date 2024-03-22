// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const JSUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudhury",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JSUser.email)
console.log(JSUser["email"])
console.log(JSUser["full name"])
console.log(JSUser[mySym])

JSUser.email="hitesh@chatgpt.com",
// Object.freeze(JSUser)
JSUser.email="hitesh@microsoft.com",

console.log(JSUser);

JSUser.greeting = function (){
    console.log("Helo JS User");
}
JSUser.greetingTwo = function (){
    console.log(`Helo JS User,${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());