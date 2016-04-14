const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'gulpfile.js', './lib/**/*.js'];

gulp.task('lint:test', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:files', () => {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(mocha());
});

gulp.task('lint', ['lint:test', 'lint:files']);
gulp.task('default', ['lint', 'mocha']);

gulp.watch(files, ['lint']);
gulp.watch('./test/**/*test.js', ['default']);
