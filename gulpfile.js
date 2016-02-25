var gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  annotate = require('gulp-ng-annotate'),
  rename = require('gulp-rename'),
  watch = require('gulp-watch'),
  prefix = require('gulp-autoprefixer'),
  uglifyCss = require('gulp-uglifycss'),
  concat = require('gulp-concat'),
  paths = {
    sass: ['./public/styles/**/*.{sass, scss}'],
    js: ['public/node_modules/ng-file-upload/dist/ng-file-upload-shim.js', 'public/node_modules/ng-file-upload/dist/ng-file-upload-all.js', './public/app/**/*.js']
  };

gulp

  .task('sass', function() {
    return gulp.src('./public/styles/main.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(prefix())
      .pipe(gulp.dest('./public/src'))
      .pipe(uglifyCss())
      .pipe(rename(function(path) {
        path.extname = '.min.css';
      }))
      .pipe(gulp.dest('./public/dist'));
  })

  .task('js', function() {
    return gulp.src(paths.js)
      .pipe(plumber())
      .pipe(concat('bundle.js'))
      .pipe(annotate())
      .pipe(gulp.dest('public/src'))
      .pipe(uglify())
      .pipe(rename(function(path) {
        path.extname = '.min.js';
      }))
      .pipe(gulp.dest('public/dist'));
  })

  .task('watch', ['sass', 'js'], function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['js']);
  })

  .task('default', ['watch']);
