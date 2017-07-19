"use strict";

var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');

gulp.task('connect', function () {
	connect.server({
		root: ['./'],
		port: '8080',
		base: 'http://localhost'
	});
});

gulp.task('default', ['connect'], function () {
	gulp.src('index.html')
		.pipe(open({
			uri: 'http://localhost' + ':' + '8080' + '/'
		}));
});