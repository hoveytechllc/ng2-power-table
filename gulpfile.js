var gulp = require('gulp');

gulp.task('default', function () {
    // place code for your default task here
});

var nodeModules = [
    // angular and dependencies
    { name: "@angular", filter: "**/*.js"},
    { name: "angular2-in-memory-api", filter: "*.js"},
    { name: "rxjs", filter: "**/*.js"},
    { name: "systemjs", filter: "dist/*.js"},
    { name: "zone.js", filter: "dist/*.js"},
    { name: "core-js", filter: "client/*.js"},
    { name: "reflect-metadata", filter: "reflect.js"},
    { name: "ng2-power-table", filter: "**/*.*"},
    { name: "ng2-bootstrap", filter: "**/*.*"},
    { name: "lodash", filter: "lodash.min.js"},
    { name: "moment", filter: "moment.js"}
];

var bowerComponents = [
    { name: "bootstrap", filter: "**/*.*"},
    { name: "font-awesome", filter: "**/*.*"},
    { name: "jquery", filter: "**/*.*"},
    { name: "chance", filter: "dist/*.*"},
    { name: "animate.css", filter: "animate.min.css"}
];

gulp.task('restore-libs', function() {
    function copyLib(name, array) {
        array.forEach(function(lib){
                gulp.src([
                    name + "/" + lib.name + "/" + lib.filter
                ]).pipe(gulp.dest("./libs" + "/" + lib.name));
        });
    };

    copyLib('node_modules', nodeModules);
    copyLib('bower_components', bowerComponents);
});


gulp.task('build', ['restore-libs'], function() {

});