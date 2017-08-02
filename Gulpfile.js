const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('styles', function(){
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles'])