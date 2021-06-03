const request = require("request");
const fs = require("fs");
const opts = require("./options")


function netDownload(filePaths) {
  filePaths.forEach((filePath) => {
    const arr = filePath.split("/");
    const name = arr[arr.length - 1];

    request(filePath).pipe(fs.createWriteStream(`${__dirname}/images/${name}`));
  });
}

netDownload(opts);
