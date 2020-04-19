const gulp = require('gulp'), // Import Gulp
	  sass = require('gulp-sass'); // Import sass package

gulp.task('sass', function() { // Create task "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Take stream
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Convert Sass to CSS by gulp-sass
		.pipe(gulp.dest('css')) // Get results in folder css
	});

gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Watching for sass files in folder sass
});

gulp.task('default', ['watch']);