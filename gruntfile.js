module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "web-desing-2/css/main.css": "web-desing-2/less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['web-desing-2/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  //load grunt watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  //load less plugin
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
};