const path = require('path');

module.exports = {
	entry: './client/src/App.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			}
		],
	},
	mode: 'development',
};