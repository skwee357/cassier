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
        },

        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                updateConfigs: ['pkg'],
                commit: false,
                createTag: false,
                push: false,
                globalReplace: true
            }
        },

        gitadd: {
            task: {
                options: {
                    force: true
                },
                files: {
                    src: ['dist/cassier.min.js']
                }
            }
        },

        release: {
            options: {
                bump: false,
                add: true,
                commit: true,
                tag: true,
                push: true,
                pushTags: true,
                npm: true,
                tagName: 'v-<%= version %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('test', ['mochaTest', 'jshint']);
    grunt.registerTask('build', ['mochaTest', 'jshint', 'uglify']);

    grunt.registerTask('release:patch', ['mochaTest', 'jshint', 'bump:patch', 'uglify', 'gitadd', 'release']);
    grunt.registerTask('release:minor', ['mochaTest', 'jshint', 'bump:minor', 'uglify', 'gitadd', 'release']);
    grunt.registerTask('release:major', ['mochaTest', 'jshint', 'bump:major', 'uglify', 'gitadd', 'release']);
};
