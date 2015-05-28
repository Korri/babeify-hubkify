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
            bookmarklets: {
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
                    {expand: true, flatten: true, src: ['src/README.md'], dest: ''},
                    {expand: true, flatten: true, src: ['src/index.html'], dest: '.gh'}
                ]
            }
        },
        clean: {
            dist: ['dist'],
            tmp: ['.tmp'],
            'gh-pages': ['.gh', '.grunt']
        },
        'gh-pages': {
            options: {
                base: '.gh'
            },
            src: ['**']
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
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('build', ['clean:dist', 'uglify', 'bookmarklet_wrapper', 'replace', 'clean:tmp']);
    grunt.registerTask('build-pages', ['replace', 'gh-pages', 'clean:gh-pages']);
};
