var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean-css'),
    plumberNotifier = require('gulp-plumber-notifier'),
    plumber = require('gulp-plumber'), 
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

var path = {
    server: {
        baseDir: "./"
    }, 
    tunnel: false,
    host: 'localhost',
    port: 8080,
    logPrefix: "FrontDevil"
};

var frontEnd = {
    watch: {
        html: "./template", 
        sass: "./sass"
    },
    src: {
        html: "./template/**/*.html",
        sass: "./sass/**/*.sass"
    },
    build: {
        style: "./css",
        html: "./"
    }
};

gulp.task('html:build', (done)=> {
    gulp.src(frontEnd.src.html)
        .pipe(gulp.dest(frontEnd.build.html))
        .pipe(livereload());
        done();
});

gulp.task('sass:build', (done) => {
    gulp.src(frontEnd.src.sass)
        .pipe(plumberNotifier())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(clean())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(plumber())
        .pipe(gulp.dest(frontEnd.build.style))
        .pipe(livereload());

        done();

});

gulp.task('default', (done) => {
    browserSync(path);
    livereload.listen();
    gulp.watch(frontEnd.watch.html, gulp.series('html:build'));
    gulp.watch(frontEnd.watch.sass, gulp.series('sass:build'));
    done();
});