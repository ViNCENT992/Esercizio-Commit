var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('public/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});
gulp.task('watch', ['sass'], function (){
  gulp.watch('public/scss/**/*.scss', ['sass']);
  gulp.watch('public/*.html');
  gulp.watch('public/js/**/*.js');
});
