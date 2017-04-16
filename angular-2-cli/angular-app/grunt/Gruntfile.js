'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          '../src/styles.css' : 'styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: [ 'sass', 'cssmin' ],
        options: {
          spawn: false,
        }
      }
    },
    compass: {
      dist: {
        options: {
        sassDir: '/',
        cssDir: '../src/',
        environment: 'development',
        outputStyle: 'compressed'
      }
      }
    },
    updateTrue: {
      options: {
        update: true
      },
      files: [{
        expand: true,
        cwd: '../src/',
        src: [
          'styles.scss'
        ],
        dest: '/',
        ext: '.css'
      }]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default',['sass','watch', 'compass']);
}