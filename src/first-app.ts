let userName: string = "Max";
console.log(userName);

userName = "Manu";

let userAge = 30;
console.log(userAge);

type StrOrNum = string | number;
let userID: StrOrNum = "abc1";

userID = 123;

// userID = true // Error

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  age: 30,
  name: "Max",
  isAdmin: true,
  id: "abc1", // 123
};

// user = {}

// let hobbies : Array<string>;
let hobbies: string[];

hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [123, 1234, 12345]

function add(a: number, b: number): number {
  return a + b;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(10, 20, add);

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "1234",
  email: "Jibrone@gmoil.com",
};

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;

  constructor(password: string, email: string, userName: string) {
    this.password = password;
    this.email = email;
    this.userName = userName;
  }
}

function login(credentials: Credentials) {}
login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["create", "delete"],
//   userName: "Jibrone",
// };

interface Admin {
  permissions: string[];
}
interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["create", "delete"],
  userName: "Jibrone",
};
type Role = "admin" | "user" | "editor";
let role: Role; // either admin, user or editor
role = "admin";
role = "user";
role = "editor";
// role = 'abc'

function performAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log("Performing action as an admin");
  } else if (role === "user") {
    console.log("Performing action as a user");
  } else {
    console.log("Performing action as an editor");
  }
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type Datastorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: Datastorage<string> = {
  storage: ["Hello", "World"],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: Datastorage<User> = {
  storage: [{ name: "Max", age: 30, isAdmin: true, id: "abc1" }],
  add(user) {
    this.storage.push(user);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
// const newUser = merge(
//   { name: "Max" },
//   { age: 30 }
// );

newUser.name;
newUser.age;
