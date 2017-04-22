'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        files: {
          '../src/styles.css' : 'styles.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: "sass:dev"
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "../src/style.css"
          ]
        },
        options: {
          watchTask: true,
          proxy: "localhost:4200"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['sass','browserSync', 'watch']);
}