const {resolve}= require("path");

module.exports= () => {
	const config= {
		context: resolve('src'),
		entry: {
			app: './js/main.js',
			vendor: ['lodash']
		}
		output: {
			path: resolve('dist');
			filename: "bundle.js",
			publicPath: "/dist/"
		},
		plugins: [
	    	new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
	  	],
		module: {
			loaders: [
				{
					test: /\.js$/,
					loaders: ['babel'],
					exclude: /node_modules/
				},
				{
					test: /\.less$/,
					loaders: ['less-loader'],
					exclude: /node_modules/
				},
			]
		}
	}

	return config;
}