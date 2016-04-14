const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

var files = ["./lib/*.js", "gulpfile.js"];
gulp.task("lint:test", () => {
  return gulp
  .src("./test/**/*test.js")
  .pipe(mocha({reporter: "nyan"}))
  .pipe(eslint({
    rules: {
      "indent": ["error", 2],
      "quotes": [2, "double", "avoid-escape"],
      "no-console": [0]
    },
    env:[
      "es6",
      "mocha"
    ]
  }))
  .pipe(eslint.format());
});
gulp.task("lint:nontest", () => {
  return gulp
  .src(files)
  .pipe(eslint({
    rules: {
      "indent": ["error", 2],
      "quotes": [2, "double", "avoid-escape"],
      "no-console": [0]
    },
    env: [
      "es6"
    ]
  }))
  .pipe(eslint.format());
});
gulp.task("default",["lint:test", "lint:nontest"]);
