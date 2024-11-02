const fs = require("fs-extra");
const readline = require("readline");
const totp = require("totp-generator");
const login = require('fca-horizon-remastered');
login({ email: "Mnbt1003@gmail.com", password: "Linh20051221@" }, (err, api) => {
    if (err) return console.error(err);
    const json = JSON.stringify(api.getAppState());
    fs.writeFileSync(`./appstateneae.json`, json, 'utf-8');
    console.log("Đã ghi xong appstate!");
    process.exit(0);
});