var gulp    = require('gulp'),
    jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  gulp.src([
    'libs/**/*_test.js'
  ]).pipe(jasmine());
});
