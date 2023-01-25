const argv = process.argv;
// const process = require('process');
const fs = require("fs");
const axios = require("axios");

function handleOutput(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf8", function (err) {
      if (err) {
        console.error(`Couldn't write ${out}: ${err}`);
        // process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

async function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const dataList = data.split("\n").slice(0, -1);
    for (i of dataList) {
      webCat(i);
    }
  });
}

async function webCat(url) {
  try {
    const resp = await axios.get(url);
    if (resp.status === 200) {
      const html = resp.data;
      let domain = url.match(/^https?:\/\/([^/]+)/i)[1];
      handleOutput(html, domain);
      console.log(domain);
    }
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    // process.exit(1);
  }
}

let path = process.argv[2];
cat(path);
