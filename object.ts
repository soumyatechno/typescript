type User = {
  readonly _id: String,
  name: String,
  email: String,
  isActive: Boolean,
  address?: "string"
}

function createUser(user: User){
  console.log(user);
}

let firstUser: User = {
  _id: "123",
  name: "John",
  email: "abc@gmaol.com",
  isActive: true
}

type user = [number, string];
let sampleUser:user = [1, "John"];
sampleUser[0] = 5;
console.log(sampleUser);