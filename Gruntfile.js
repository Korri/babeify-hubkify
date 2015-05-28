'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bookmarklet_wrapper: {
            bookmarklets: {
                files: {
                    'dist/babeify.js': ['.tmp/babeify.js', '.tmp/common.js'],
                    'dist/hunkify.js': ['.tmp/hunkify.js', '.tmp/common.js']
                }
            },
        },
        uglify: {
            hunk: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '*.js',
                    dest: '.tmp'
                }]
            }
        },
        replace: {
            readme: {
                options: {
                    patterns: [
                        {
                            match: 'babeify',
                            replacement: '<%= grunt.file.read("dist/babeify.js") %>'
                        },
                        {
                            match: 'hunkify',
                            replacement: '<%= grunt.file.read("dist/hunkify.js") %>'
                        },
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/README.md'], dest: ''}
                ]
            }
        },
        clean: {
            dist: ['dist'],
            tmp: ['.tmp']
        },
        watch: {
            readme: {
                files: ['src/README.md'],
                tasks: ['replace'],
            },
            bookmarklets: {
                files: ['src/babeify.js', 'src/hunkify.js', 'src/common.js'],
                tasks: ['build'],
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-bookmarklet-wrapper');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['clean:dist', 'uglify', 'bookmarklet_wrapper', 'replace', 'clean:tmp']);
};
