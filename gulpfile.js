const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');



gulp.task('style', function () {
    gulp.src('./styles/styles.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            basename: 'style',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/styles/'));
});

gulp.task('js', function () {
    gulp.src('scripts/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('img', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['style', 'js', 'img']);