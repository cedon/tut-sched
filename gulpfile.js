// Task Variables
var gulp = require('gulp'),
    gulpif = require ('gulp-if'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// Source Variables
var srcDirSass = 'Src/sass/',
    srcDirScripts = 'Src/javascript/',
    srcSass = [srcDirSass + 'style.scss'],
    srcJavaScript = [
        srcDirScripts + 'prog_func.js',
        srcDirScripts + 'pagination.js',
        srcDirScripts + 'sched_toggle.js'
    ];

// Dest Variables
var environment = 'dev'; // Switch to 'prod' for Production

var dirBuild = 'Builds/' + environment,
    dirScriptBuild = dirBuild + '/_js',
    dirStyleBuild = dirBuild + '/_css';

gulp.task('js', function() {
    gulp.src(srcJavaScript)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('script.js'))
        .pipe(gulpif((environment==='prod'),uglify({mangle: true})))
        .pipe(gulp.dest(dirScriptBuild))
});