module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/main.js',
                    'src/utils.js',
                    'src/scope.js',
                    'src/annotation.js',
                    'src/view.js',
                    'src/annotations/accessor.js',
                    'src/annotations/watch.js',
                    'src/annotations/altimage.js',
                    'src/annotations/on.js',
                    'src/annotations/setproperty.js',
                    'src/nodes/text.js',
                    'src/nodes/tag.js',
                    'src/nodes/each.js',
                    'src/nodes/if.js',
                    'src/nodes/input.js',
                    'src/nodes/select.js'
                ],
                dest: 'dist/atframework.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};
