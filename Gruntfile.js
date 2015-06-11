/*
 * grunt-esperanto
 * https://github.com/developit/grunt-esperanto
 *
 * Copyright (c) 2014 Jason Miller
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    esperanto: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing']
        }
      },
      commonjs: {
        options: {
          separator: '\n',
          type: 'cjs'
        },
        files: {
          'tmp/commonjs': ['test/fixtures/testing']
        }
      },
      amd_with_name: {
        options: {
          bundleOpts: {
            amdName: 'myBundle'
          }
        },
        files: {
          'tmp/amd_with_name': ['test/fixtures/testing']
        }
      },
      amd_with_file_path_name: {
        options: {
          filePathAsModule: true
        },
        files: {
          'tmp/amd_with_file_path_name': ['test/fixtures/testing']
        }
      },
      umd: {
        options: {
          type: 'umd',
          bundleOpts: {
            name: 'custom_name'
          }
        },
        files: {
          'tmp/umd': ['test/fixtures/testing']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'esperanto', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
