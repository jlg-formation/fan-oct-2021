const fs = require("fs");

(async () => {
  try {
    console.time("truc");
    const files = await fs.promises.readdir(".");
    console.log("files: ", files);
    const content = await fs.promises.readFile(files[0], { encoding: "utf-8" });
    console.timeLog("truc");
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
})();
