var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');

var destPath = './wwwroot/libs/';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ])
    gulp.src([
   'node_modules/bootstrap/dist/fonts/**'
    ]).pipe(gulp.dest('./wwwroot/libs/fonts'));
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "./scripts/*.ts",
            "./scripts/components/*.ts",
            "./scripts/helpers/*.ts",
            "./scripts/models/*.ts",
            "./scripts/services/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});
var tsProject1 = ts.createProject('tsconfig.json');
gulp.task('sourceMapGenerate', function () {
    var tsResult = gulp.src([
            "./scripts/**/*.ts"
    ])
        .pipe(sourcemaps.init({debug: true})) // This means sourcemaps will be generated
        .pipe(ts(tsProject1))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./wwwroot/appScripts'));//test
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('./wwwroot/appScripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch', 'ts', 'sourceMapGenerate']);
