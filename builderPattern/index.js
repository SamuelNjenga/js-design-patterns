class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, {
        age,
        phone = '074690',
        address
    } = {}) { // Can pass default values
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Sam', {
    age: 30,
    address: new Address('1', 'Main')
})
console.log(user);