const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

var lintFiles = ["server.js", "index.js", "lib/**/*.js", "test/**/*.js", "bin/*", "gulpfile.js"];
var testFiles = ["server.js", "lib/**/*.js", "test/**/*.js"];

gulp.task("lint", () => {
  return gulp.src(lintFiles)
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

gulp.task("test", () => {
  return gulp.src("./test/server_test.js")
    .pipe(mocha({
      "reporter": "spec"
    }));
});

gulp.task("watch", () => {
  gulp.watch(lintFiles, ["lint"]);
  gulp.watch(testFiles, ["test"]);
});

gulp.task("default", ["lint", "test", "watch"]);
