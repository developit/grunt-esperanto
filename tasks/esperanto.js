/*
 * grunt-esperanto
 * https://github.com/developit/grunt-esperanto
 *
 * Copyright (c) 2014 Jason Miller
 * Licensed under the MIT license.
 */

'use strict';

var esperanto = require('esperanto');

module.exports = function(grunt) {
	grunt.registerMultiTask('esperanto', 'Wrapper for the esperanto module transpiler', function() {
		var bl = ['type', 'separator'],
			options, method;

		options = this.options({
			// defaults
			type : 'amd',
			separator : '\n',
			bundleOpts: {}
		});

		method = {
			cjs : 'toCjs',
			commonjs : 'toCjs',
			umd : 'toUmd'
		}[String(options.type).toLowerCase()] || 'toAmd';

		function transpile(code) {
			return esperanto[method](code, options.bundleOpts).code;
		}

		this.files.forEach(function(f) {
			grunt.file.write(
				f.dest,
				f.src.filter(function(n, e) {
						if (!(e=grunt.file.exists(n))) {
							grunt.log.warn('Source file '+n+' not found.');
						}
						return e;
					})
					.map(grunt.file.read)
					.map(transpile)
					.join(options.separator)
			);
		});
	});
};
