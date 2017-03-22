// gulpfile starting browserSync
// March 2017, Vincent VIVANLOC for OpenFeeder 

// TODO: generate target min css from bootswatch sources

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var pkg = require('./package.json');


// // Compile LESS files from /less into /css
// gulp.task('less', function() {
//     return gulp.src('assets/less/bootswatch.less')
//         .pipe(less())
//         .pipe(gulp.dest('assets/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))
// });

// // Minify compiled CSS
// gulp.task('minify-css', ['less'], function() {
//     return gulp.src('assets/css/*.css')
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(rename('bootstrap.min.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }))

// });

// Run everything
//  gulp.task('default', ['less', 'minify-css']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() { //, 'less', 'minify-css'
    // gulp.watch('assets/less/*.less', ['less']);
    // gulp.watch('assets/css/*.css', ['minify-css']);
    // Reloads the browser whenever files change
    gulp.watch('dist/css/*.css', browserSync.reload);
    gulp.watch('assets/js/*.js', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});
