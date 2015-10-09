module.exports = function (grunt) {
    grunt.initConfig({
        stylus: {
            base: {
                files: {
                    'build/margins.css': 'src/margins.styl',
                    'build/paddings.css': 'src/paddings.styl'
                },
                options: {
                    compress: false,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');

    grunt.registerTask('default', ['stylus']);
};