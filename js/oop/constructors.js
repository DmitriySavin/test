const options = {
  name: "John",
  email: "j@1gmail.com",
  password: "123456",
};

const User = function ({ name, email, password } = {}) {
  //   const { name, email, password } = options;
  this.name = name;
  this.email = email;
  this.password = password;
};
console.log(User.prototype)
User.prototype.changeEmail = function(newEmail) {
    this.email = newEmail;
};
User.prototype.changePassword = function(newPassword) {
    this.password = newPassword;
};



const Vasyl = new User({
  name: "vasyl",
  email: "vas@gmail.com",
  password: "12345",
});
Vasyl.changeEmail('vasya@g,ai;.cosmslds');
const Anton = new User({
  name: "anton",
  email: "a@gmail.com",
  password: "12r34w5",
});
Anton.changePassword('1l23l234l');
console.log(Vasyl);
console.log(Anton);
