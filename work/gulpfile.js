const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');


gulp.task('default', ['imagemin', 'styles'], function() {
   var img_src = 'src/images/**/*', img_dest = 'build/images';   
   gulp.src(img_src)
	   .pipe(changed(img_dest))
	   .pipe(imagemin())
	   .pipe(gulp.dest(img_dest))

	gulp.src(['src/styles/*.css'])
	   .pipe(concat('styles.css'))
	   .pipe(autoprefix('last 2 versions'))
	   .pipe(minifyCSS())
	   .pipe(gulp.dest('build/styles/'));    
});