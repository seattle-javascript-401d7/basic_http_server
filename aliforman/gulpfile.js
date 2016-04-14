'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
var files = ['/*.js', '!node_modules/**'];

gulp.task('lint:test', () => {
  gulp.src('./test/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  gulp.src('./test/*.js')
   .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch(files, './test/*.js');
});

gulp.task('default', ['lint:test', 'lint:nontest', 'mocha:test']);
