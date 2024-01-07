const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		port: 8082,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	mode: 'development',
	plugins: [
		new ModuleFederationPlugin({
			name: 'cart',
			filename: 'remoteEntry.js',
			exposes: {
				'./CartIndex': './src/bootstrap',
			},
			shared: ['@faker-js/faker'],
			// shared: {
			// 	'@faker-js/faker': {
			// 		singleton: true, //NOTE: This is for when we want to put in a single copy of the module even if there are different versions used in the sub-apps
			// 	},
			// },
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
