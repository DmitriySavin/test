function logPromt() {
  return prompt("Введіть пароль!").trim();
}

function isLoginValid(login) {
  if (login.length > 4 && login.length < 16) {
    return true;
  } else {
    return false;
  }
}
// isLoginValid();

function isLoginUnique(allLogins, login) {
  //   const allLogins = [];
  // let login = prompt("parol").trim();
  if (!allLogins.includes(login)) {
    return true;
  } else {
    return false;
  }
}
// isLoginUnique();

function addLogin() {
  const allLogins = [];
  while (true) {
    let login = logPromt();
    if (isLoginValid(login)) {
      if (isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        console.log("Логін успішно доданий!");
      } else {
        console.log("Такий логін уже використовується!");
        login = logPromt();
      }
    } else {
      console.log("Помилка! Логін повинен бути від 4 до 16 символів");
    }
    if (login == null) {
      continue;
    }
  }
  //         while (true) {
  //     let login = prompt("Введіть пароль!").trim();
  // }
}
addLogin();
