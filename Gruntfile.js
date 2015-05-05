module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "./public/css/style.css": "./public/less/base.less" // destination file and source file
        }
      }
    },
    watch: {
      less: {
        files: ['../less/{,*/}*.less'],
        tasks: ['less:dev'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);
  grunt.registerTask('watch', ['less', 'watch:less']);
};
