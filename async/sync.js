const fs = require("fs");

try {
  console.time("truc");
  const files = fs.readdirSync(".");
  console.log("files: ", files);
  const content = fs.readFileSync(files[0], { encoding: "utf-8" });
  console.timeLog("truc");
  console.log("content: ", content);
} catch (err) {
  console.log("err: ", err);
}
