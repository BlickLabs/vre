/*jslint node: true, indent: 2,nomen:true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styl: {
        files: ['styl/*.styl'],
        tasks: ['compileStylus']
      },
      js: {
        files: ['js/*.js'],
        tasks: ['compileJavascript']
      }
    },
    stylus: {
      options: {
        use : [
          function () {
            return require('autoprefixer-stylus')('last 2 versions', 'ie 8');
          }
        ]
      },
      compile: {
        files: {
          'css/styles.min.css': 'styl/main.styl'
        }
      }
    },
    jslint: {
      client: {
        src: ['js/*.js'
          ],
        directives: {
          browser: true
        }
      }
    },
    concat: {
      options: {
        separator: ''
      },
      basic: {
        src: ['js/*.js'],
        dest: 'js/app.js'
      }
    },
    bower_concat: {
      all: {
        dest: 'js/bower_dependencies.js',
        dependencies: {
          'underscore': 'jquery'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/app.min.js': ['<%= concat.basic.dest %>'],
          'js/bower.min.js': ['<%= bower_concat.all.dest %>']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['stylus', 'jslint', 'concat', 'bower_concat', 'uglify', 'watch']);
  grunt.registerTask('compileStylus', ['stylus']);
  grunt.registerTask('compileJavascript', ['jslint', 'concat', 'uglify']);
};
