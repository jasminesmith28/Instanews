const gulp =require('gulp');

const uglify = require("gulp-uglify"),
  rename = require("gulp-rename");

gulp.task("default", function() {
  return gulp
    .src("./js/*.js") 
    .pipe(uglify()) 
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js")); 
});

var browserSync = require('browser-sync').create();

gulp.task("browser-sync", function() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });

    gulp
      .watch(['index.html', 'build/css/*.css', 'build/js/*.js'])
      .on('change', browserSync.reload);
  });


  const eslint = require('gulp-eslint');

gulp.task('lint', function() {
   return gulp.src("./js/*.js")

       .pipe(eslint())
       .pipe(eslint.format())
       .pipe(eslint.failAfterError());
});