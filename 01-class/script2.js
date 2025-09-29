class User {
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

class Admin extends User {
  role = "ADMIN";
  adminId = null;
  createAt = null;

  constructor(name, age, adminId, createAt) {
    super(name, age);
    this.addinId = adminId;
    this.createAt = createAt;
  }

  blockUser = (id) => {
    return `მომხმარებელი id: ${id} დაბლოკილია`;
  };
}

const mainAdmin = new Admin("Mindia", 24, 11000100, "2020/01/01");
console.log(mainAdmin);

class Guest extends User {
  role = "GUEST";
  guestId = null;
  deffaultNickname = "user1122331001";

  constructor(name, age, userId, nick) {
    super(name, age);
    this.guestId = userId;
    this.deffaultNickname = nick;
  }
}

const guest1 = new Guest("Mindia", 20, 10120321, "Gio");
console, log(guest1);
