'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bookmarklet_wrapper: {
            bookmarklets: {
                files: {
                    'dist/bjm.js': ['src/bjm.js']
                }
            },
        },
        watch: {
            bjm: {
                files: '<%= bookmarklet_wrapper.bookmarklets.files["dist/bjm.js"] %>',
                tasks: ['bookmarklet_wrapper:bookmarklets'],
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-bookmarklet-wrapper');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
