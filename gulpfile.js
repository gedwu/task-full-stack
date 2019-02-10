const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Optimize Images
gulp.task('imageMin', () =>
    gulp.src('storage/app/public/*')
        .pipe(imagemin())
        .pipe(gulp.dest('storage/app/public'))
);
