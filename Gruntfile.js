
module.exports = function(grunt) {
    var tmpls = 'tasks/views/*';

    grunt.initConfig({
        nunjucks: {
            precompile: {
                src: tmpls,
                dest: 'tasks/output/templates.js'
            }
        },

        watch: {
            nunjucks: {
                files: tmpls,
                tasks: ['nunjucks']
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
