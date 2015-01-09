module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        },

        uglify: {
            cassier: {
                options: {
                    banner: '/*! <%= pkg.name %>@<%= pkg.version %> by <%= pkg.author.name %> [<%= pkg.author.email %>] */\n'
                },
                files: {
                    'dist/cassier.min.js': ['src/cassier.js']
                }
            },
            locales: {
                options: {
                    preserveComments: 'some'
                },
                files: [{
                    expand: true,
                    cwd: 'src/locales',
                    src: '**/*.js',
                    dest: 'dist/locales'
                }]
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'src/cassier.js',
                'src/locales/**/*.js'
            ],
            options: {
                node: true,
                browser: true,
                curly: true,
                devel: false,
                eqeqeq: true,
                noarg: true,
                undef: true,
                "-W100": true,
                globals: {
                    define: true,
                    require: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', 'mochaTest');
    grunt.registerTask('build', ['mochaTest', 'jshint', 'uglify']);
};
