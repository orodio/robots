var gulp    = require('gulp'),
    jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  gulp.src([
    'robot_test.js',
    'libs/**/*_test.js'
  ]).pipe(jasmine());
});
