const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const webpack = require('webpack');


module.exports = {
	mode: process.env.WEBPACK_MODE,
	entry: './src/js/main.js',
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.(s*)css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
		}, {
			test: /\.html$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "[name].[ext]"
				}
			}, {
				loader: "extract-loader"
			}, {
				loader: "html-loader"
			}]
		}, {
			test: /\.(png|svg(z*)|jp(e*)g|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: "[hash]-[name].[ext]",
					publicPath: "/img/",
					outputPath: "img/",
				}
			}]
		}]
	},
	plugins: [
		/*new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		  }),*/
		new MiniCssExtractPlugin({
			filename: "css/styles.css"
		}),
		new CleanWebpackPlugin(['dist'])
	],
	/*resolve: {
        alias: {
			'jquery': require.resolve('jquery')
		}
	},*/
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		host: "0.0.0.0",
		port: 80
	}
};