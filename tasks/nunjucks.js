/*
 * grunt-nunjucks
 * https://github.com/jlongster/nunjucks-grunt
 *
 * Copyright (c) 2013 James Long
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    var nunjucks = require('nunjucks');
    var lib = require('nunjucks/src/lib');

    grunt.registerMultiTask('nunjucks', 'Precompile nunjucks', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var opts = this.options({
            asFunction: false,
            env: null
        });

        var nameFunc = lib.isFunction(opts.name) ? opts.name : function(filepath) {
            return filepath.split('\\').join('/');
        };

        this.files.forEach(function (f) {
            var src = f.src.filter(function (filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                    opts.name = nameFunc(filepath);
                    return nunjucks.precompile(filepath, opts);
                }).join('');

            grunt.file.write(f.dest, src);
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
