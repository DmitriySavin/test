const user = {
  mood: "happy",
};
user.hobby = "skydiving";
user.premium = false;
function numUser() {
    let buffer = Object.keys(user);
  for (const i of buffer) {
    console.log(`${i} - ${user[i]}`);
  }
}
numUser(user);
