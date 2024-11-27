const userResponse = confirm('Небезпечно , ви підтверджуете вашу дію?');
if (userResponse) {
    console.log("Дію підтверджено!");
}
else {
    console.log("Дію скасовано");
}