const path = require("path");

module.exports = {
  mode: "production", // Minified
  entry: {
    // What file to take and where to put it
    ["global"]: "./src/globals.js",
    ["home-page"]: "./src/home-page.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // Creates file name in 'dist' folder
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
};
