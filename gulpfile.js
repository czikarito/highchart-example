var gulp = require('gulp');
var conventionalChangelog = require('gulp-conventional-changelog');
const imageResize = require('gulp-image-resize');

gulp.task('changelog', function () {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('resizer', function() {
  return gulp
    .src('source/images/*.{jpg,jpeg}')
    .pipe(imageResize({
      width : 500,
      height : 500,
      crop : true
    }))
    .pipe(gulp.dest('public/images/'))
  });
