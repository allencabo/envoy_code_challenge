"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    bourbon = require("node-bourbon").includePaths,
    neat = require("node-neat").includePaths;

// Compile SASS files
gulp.task("styles", function() {
    gulp.src("assets/styles/**/*.scss")
        .pipe(sass({
            includePaths: bourbon,
            includePaths: neat
        }))
        .pipe(gulp.dest("dist/styles/"))
});
// Compile JS files
gulp.task("scripts", function() {
    gulp.src("assets/scripts/*.js")
        .pipe(gulp.dest("dist/scripts/"))
});

gulp.task("watch", function() {
    gulp.watch("assets/styles/**/*.scss", ['styles'])
    gulp.watch("assets/scripts/**/*.js", ['scripts'])
});
gulp.task('default', ['styles', 'scripts', 'watch']);
