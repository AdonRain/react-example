var gulp = require("gulp");
var connect = require('gulp-connect');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("pack", function(callback) {
  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, function(err, stats) {
    if(err) console.log(err);
    callback();
  });
});

gulp.task('watch', function (){
  gulp.watch('./fe/**', ['pack']);
});

gulp.task('serve', ['pack'], function (){
  connect.server({
    root: 'public',
    port: '8080',
    livereload: true
  });
});

gulp.task('default', ['watch', 'serve']);
