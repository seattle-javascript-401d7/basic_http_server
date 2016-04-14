const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

var files = ["index.js", "lib/**/*.js", "test/**/*.js", "bin/*", "gulpfile.js"];

gulp.task("lint", () => {
  return gulp.src(files)
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
  gulp.watch(files, ["lint"]);
  gulp.watch("./server.js", ["test"]);
});

gulp.task("default", ["lint", "test", "watch"]);
