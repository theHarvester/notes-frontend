var gulp = require('gulp'),
    less = require('gulp-less'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['browserify', 'serve']);

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./public"
    });

    gulp.watch("src/css/*.less", ['less']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js", ['js-watch']);
});

gulp.task('js-watch', ['browserify'], browserSync.reload);

// I added this so that you see how to run two watch tasks
gulp.task('less', function () {
    return gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream());
});

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: ['./src/js/index.js'], // Only need initial file, browserify finds the deps
        transform: [babelify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    
    var watcher = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .pipe(source('index.js'))
                // This is where you add uglifying etc.
                .pipe(gulp.dest('./public/js/'));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .on('error', function(err) {
            gutil.log(err.message);
            // this.end();
        })
        .pipe(source('index.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.stream());
});