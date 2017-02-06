var gulp = require("gulp"),
	sass = require("gulp-sass"),
	pug = require("gulp-pug"),
	plumber = require("gulp-plumber");

gulp.task("start", function(){
	console.log("Gulp has started!");
});

gulp.task("compile_pug", function(){
	gulp.src("pug_files/index.pug")
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest("index.pug"));
});

gulp.task("compile_sass", function(){
	gulp.src("sass_files/general_styling.sass")
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest("css_files/general_styling.css"));
});

gulp.task("default", ["start"], function(){
	gulp.watch("pug_files/index.pug", ["compile_pug"]);
	gulp.watch("sass_files/general_styling.sass", ["compile_sass"]);
});