module.exports = function ( grunt ) {
	// NPM tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		concat: {
			dist: {
				dest: 'assets/js/main.js',
				options: {
					banner: '(function(window,undefined){\'use strict\';',
					footer: '})(this);',
					sourceMap: true
				},
				src: [
					'assets/js/src/main.js'
				]
			}
		},
		gitadd: {
			dist: {
				files: {
					src: [
						'assets/css/*.css',
						'assets/css/*.map',
						'assets/js/*.js',
						'assets/js/*.map'
					]
				}
			}
		},
		githooks: {
			dist: {
				'pre-commit': 'default'
			}
		},
		jshint: {
			dist: {
				all: [
					'assets/js/src/**/*.js',
					'assets/js/test/**/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			}
		},
		phpcs: {
			dist: {
				dir: [
					'*.php',
					'includes/*.php',
					'includes/**/*.php'
				]
			},
			options: {
				standard: 'project.ruleset.xml'
			}
		},
		sass: {
			dist: {
				files: {
					'assets/css/main.css': 'assets/css/src/main.scss'
				},
				options: {
					imagePath: 'assets/img',
					outputStyle: 'compressed',
					sourceMap: true
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'assets/js/main.js': [
						'assets/js/main.js'
					]
				},
				options: {
					mangle: {
						except: [
							'jQuery'
						]
					},
					sourceMap: true
				}
			}
		},
		watch: {
			css: {
				files: [
					'assets/css/src/*.scss',
					'assets/css/vendor/**/*.css'
				],
				tasks: [
					'sass'
				],
				options: {
					debounceDelay: 500,
					livereload: true
				}
			},
			js: {
				files: [
					'assets/js/src/**/*.js',
					'assets/js/vendor/**/*.js'
				],
				tasks: [
					'jshint',
					'concat',
					'uglify'
				],
				options: {
					debounceDelay: 500
				}
			}
		}
	} );

	// Tasks
	grunt.registerTask( 'default', [
		'css',
		'js',
		'php'
	] );

	grunt.registerTask( 'css', [
		'sass',
		'gitadd'
	] );

	grunt.registerTask( 'js', [
		'jshint',
		'concat',
		'uglify',
		'gitadd'
	] );

	grunt.registerTask( 'php', [
		'phpcs'
	] );

	grunt.util.linefeed = '\n';
};
