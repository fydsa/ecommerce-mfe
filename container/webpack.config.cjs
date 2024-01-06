const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	entry: './src/index.ts',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devServer: {
		port: 8080,
	},
	mode: 'development',
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				products: 'products@http://localhost:8081/remoteEntry.js',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
