/*jslint node: true, indent: 2,nomen:true */
'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      styl: {
        files: ['app/styl/*.styl'],
        tasks: ['compileStylus']
      },
      js: {
        files: ['app/js/*.js'],
        tasks: ['compileJavascript']
      },
      etc: {
        files: ['app/favicon.ico', 'app/fonts/*.*', 'app/img/*.*', 'app/img/icons/*.*'],
        tasks: ['copy']
      },
    },
    stylus: {
      options: {
        use : [
          function () {
            return require('autoprefixer-stylus')('last 2 versions', 'ie 8');
          }
        ],
        define: {
          import_tree: require('stylus-import-tree')
        }
      },
      compile: {
        files: {
          'dist/css/styles.min.css': 'app/styl/main.styl'
        }
      }
    },
    jslint: {
      client: {
        src: ['app/js/*.js', '!app/js/app.js', '!app/js/bower_dependencies.js'],
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
        src: ['app/js/*.js', '!app/js/app.js', '!app/js/bower_dependencies.js'],
        dest: 'app/js/app.js'
      }
    },
    bower_concat: {
      all: {
        dest: 'app/js/bower_dependencies.js',
        cssDest: 'app/css/bower_dependencies.css',
        dependencies: {
          'bootstrap': 'jquery',
          'jquery-validation': 'jquery'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['app/css/bower_dependencies.css'],
          dest: 'dist/css/bower_dependencies.min.css'
        }]
      }
    }
    uglify: {
      app: {
        options: {},
        files: {
          'dist/js/app.min.js': ['<%= concat.basic.dest %>'],
        }
      },
      bower: {
        options: {},
        files: {
          'dist/js/bower_dependencies.min.js': ['<%= bower_concat.all.dest %>']
        }
      }
    },
    copy: {
      all : {
        files : [
          {
            expand : true,
            dest   : 'dist/img',
            cwd    : 'app/img',
            src    : [
              '**/*'
            ]
          },
          {
            expand : true,
            dest   : 'dist/fonts',
            cwd    : 'app/fonts',
            src    : [
              '**/*'
            ]
          },
          {
            src: 'app/favicon.png',
            dest: 'dist/favicon.png'
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['stylus', 'jslint', 'concat', 'bower_concat', 'uglify', 'cssmin', 'copy', 'watch']);
  grunt.registerTask('compileStylus', ['stylus']);
  grunt.registerTask('compileJavascript', ['jslint', 'concat', 'uglify:app']);
  grunt.registerTask('compileBower', ['bower_concat', 'uglify:bower', 'cssmin']);
};
