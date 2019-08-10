const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
	filename : 'bundle.js',
	path : path.resolve(__dirname, 'dist')
    },
    mode : 'development',
    resolve : {
	extensions : ['.ts','.tsx','.js']
    },
    module : {
	rules : [
	    {
		test : /\.tsx?$/,
		loader : 'ts-loader',
		options : {
		    transpileOnly : true
		}
	    }
	]
    },
    devServer : {
	host : '0.0.0.0',
	port : 9000
    }
};
