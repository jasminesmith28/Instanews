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

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

