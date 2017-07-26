const webpackConfig = require('./webpack.config.js');
const webpack = require('karma-webpack');

module.exports= function(config){
	config.set({
		basePath: 'src',
        frameworks: ['jasmine'],
		files: [
			{pattern: '**/*.js', watched: false}        
        ],
        preprocessors: {	
            '**/*.js': ['webpack']
        },
        webpack:webpackConfig,
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,

	});

}