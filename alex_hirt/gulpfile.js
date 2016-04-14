'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
  return gulp.src(['./*.jsgul'])
    .pipe(eslint({}))
    .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  return gulp.src(['./test/**/*test.js'])
    .pipe(eslint({}))
    .pipe(eslint.format());
});

var allScripts = ['./*.js', './test/**/*test.js'];

gulp.task('lint:watch', () => {
  gulp.watch(allScripts, ['lint:all']);
});

gulp.task('mocha', () => {
  return gulp.src(['./test/**/*test.js'])
    .pipe(mocha({ 'reporter': 'nyan' }));
});

gulp.task('lint:all', ['lint:test', 'lint']);
gulp.task('do-almost-everything', ['lint:test', 'lint', 'mocha']);
gulp.task('default', ['do-almost-everything']);
