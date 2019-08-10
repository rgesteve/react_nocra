const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
	filename : 'bundle.js',
	path : path.resolve(__dirname, 'dist')
    },
    mode : 'development',
    devServer : {
	host : '0.0.0.0',
	port : 9000
    }
};
