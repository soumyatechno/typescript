interface User {
  name: string,
  userId: number,
  email: string,
  startTrial(): string 
}

interface User {
  githubId: string
}
interface Admin extends User {
  adminId?: number,
  permissions: string[]
}

const Sourav : Admin = {
  name: "Sourav",
  userId: 1,
  email: "SouraveSample@g,mail.com",
  startTrial() {
    return "Trial Started";
  },
  githubId: "Sourav",
  permissions: ["READ","WRITE","DELETE"]

  
}

Sourav.name = "Sourav Roy";

console.log(Sourav);