function user(username, age) {
  let fullInfo = `my name is ${username}, age is ${age}`;

  return fullInfo;
}

let userOne = user("Mindia", 26);
let userTwo = user("Ani", 40);

// console.log(userOne, userTwo);

class User2 {
  username = null;
  age = null;

  constructor(test1, test2) {
    this.username = test1;
    this.age = test2;
  }

  getFullInfo = () => {
    return `my name is ${this.username},age is ${this.age}`;
  };
}
const user3 = new User2("Mindia", 26);
const user4 = new User2("Ani", 40);

console.log(user3);
console.log(user4);
