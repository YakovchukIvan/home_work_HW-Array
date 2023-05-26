"use strict"

class User {
	
	constructor (username, password) {
		this.username = username;
		this.password = password;
	}
	validatePassword() {
		// > 6
		if (this.password.length > 6) {
			return true;
		}
		return false;
	}

}


let a = 'Ivan';
let b = '777';

const person = new User(a, b);
console.log("person:", person)
console.log("person.username:", person.username)
console.log("person.validatePassword()", person.validatePassword());











