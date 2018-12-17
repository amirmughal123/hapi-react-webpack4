const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js', // filename: '[name].[contenthash].js,
		publicPath: '/'
	},
	// optimization: {
	// 	runtimeChunk: 'single',
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		maxInitialRequests: Infinity,
	// 		minSize: 0,
	// 		cacheGroups: {
	// 			vendor: {
	// 				test: /[\\/]node_modules[\\/]/,
	// 				name(module) {
	// 					const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
	// 					return `npm.${packageName.replace('@', '')}`;
	// 				},
	// 			},
	// 		},
	// 	},
	// },
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		port: 1313,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						rootMode: "upward-optional",
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './fonts/'
					}
				}]
			}
		]
	}
};
