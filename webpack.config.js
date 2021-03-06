const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'public'),
	entry: './javascripts/index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
		rules: [
			{
				test: /\.js/,
				exclude: /(node_modules)/,
				use: ["babel-loader"]
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ test: /\.(eot|svg|woff|ttf|gif)$/, loader: 'url-loader'}
		]
	},
  resolve: {
		extensions: ["*", ".js", ".css"],
	}
};