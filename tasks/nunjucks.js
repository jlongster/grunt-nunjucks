/*
 * grunt-nunjucks
 * https://github.com/jlongster/nunjucks-grunt
 *
 * Copyright (c) 2013 James Long
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var nunjucks = require('nunjucks');

    grunt.registerMultiTask('nunjucks', 'Precompile nunjucks', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var opts = this.options({
            asFunction: false,
            env: null
        });

        var files = this.files.forEach(function(f) {
            var src = f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                var precompileOpts = {
                    asFunction: opts.asFunction,
                    env: opts.env
                };
                if (opts.rename) {
                    precompileOpts.name = opts.rename(filepath);
                }
                return nunjucks.precompile(filepath, precompileOpts);
            }).join('');

            grunt.file.write(f.dest, src);
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
