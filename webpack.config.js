const path = require('path');
const HtmlWebPackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.MODE;

module.exports = {
	mode: mode,
	entry: [
		'./src/js/main.ts'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/compressed.js'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: './css/style.css'
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [{ from: 'src/css/cursors', to: 'css/cursors' }]
		// })
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		historyApiFallback: true,
		compress: true,
		port: 9000,
	},
	devtool: 'source-map'
};