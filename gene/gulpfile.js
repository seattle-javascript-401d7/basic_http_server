var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', () => {
  return gulp.src(['test/*.js'], { read: false })
  .pipe(mocha({ reporter: 'list' }))
  .on('error', gutil.log);
});

gulp.task('watch-mocha', () => {
  gulp.watch(['lib/**', 'test/**'], ['mocha']);
});

var files = ['**', '**/*'];

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('default', ['lint', 'watch-mocha']);
