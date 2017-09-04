"use strict";

module.exports = function (grunt) {

  // Load all Grunt tasks that are listed in package.json automagically
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    // This is where our tasks are defined and configured

    // Grunt Jekyll
    jekyll: {
      build: {
        dest: "_site"
      }
    },

    // Grunt Sass
    sass: {
      dist: {
        files: {
          "dist/css/style.css": "src/scss/index.scss"
        }
      }
    },

    // Grunt contrib concat
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        // Files are liste this way to be commented out if they are not needed!
        src: [
          'src/js/bootstrap/alert.js',
          'src/js/bootstrap/button.js',
          'src/js/bootstrap/carousel.js',
          'src/js/bootstrap/collapse.js',
          'src/js/bootstrap/dropdown.js',
          'src/js/bootstrap/modal.js',
          'src/js/bootstrap/popover.js',
          'src/js/bootstrap/scrollspy.js',
          'src/js/bootstrap/tab.js',
          'src/js/bootstrap/tooltip.js',
          'src/js/bootstrap/util.js',
          'src/js/custom/*.js'
        ],
        dest: 'dist/js/scripts.js',
      },
    },

    // Grunt contrib uglify
    uglify: {
      dist: {
        files: {
          'dist/js/scripts.min.js': 'dist/js/scripts.js'
        }
      }
    },

    // Grunt contrib watch
    watch: {
      sass: {
        files: "src/scss/**/*.scss",
        tasks: ["sass"]
      },
      concat: {
        files: "src/js/**/*.js",
        tasks: ["concat"]
      },
      jekyll: {
        files: ["**/*.html", "_layouts/*.html", "_posts/*.md", "_data/*.yml", "dist/css/style.css"],
        tasks: ["jekyll"]
      }
    },

    // Grunt BrowserSync
    browserSync: {
      dev: {
        bsFiles: {
          src : ["**/*.html", "_layouts/*.html", "_posts/*.md", "_data/*.yml", "dist/css/style.css"]
        },
        options: {
          watchTask: true,
          server: "_site"
        }
      }
    }

  });

  // Custom tasks
  grunt.registerTask('default', ['browserSync', 'watch']);



};
