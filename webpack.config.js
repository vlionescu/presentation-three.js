const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
	entry: {
		app:'./src/cheating/dice.js'
	},
	output: {
		path: path.join( __dirname + '/public' ),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/
		}]
	},
	resolve: {
		alias: {
			three$: 'three/build/three.min.js',
			'three/.*$': 'three'
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			THREE: 'three',
		})
	]
};
