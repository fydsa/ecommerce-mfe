const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		port: 8081,
	},
	mode: 'development',
	plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex': './src/index',
			},
			shared: ['@faker-js/faker'],
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
