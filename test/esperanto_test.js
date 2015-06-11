'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.esperanto = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options').replace(/\s|\n/g,'');
    var expected = grunt.file.read('test/expected/default_options').replace(/\s|\n/g,'');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  commonjs: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/commonjs').replace(/\s|\n/g,'');
    var expected = grunt.file.read('test/expected/commonjs').replace(/\s|\n/g,'');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
  amd_with_name: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/amd_with_name').replace(/\s|\n/g,'');
    var expected = grunt.file.read('test/expected/amd_with_name').replace(/\s|\n/g,'');
    test.equal(actual, expected, 'accept esperanto options setting the amd name.');

    test.done();
  },
  amd_with_file_path_name: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/amd_with_file_path_name').replace(/\s|\n/g,'');
    var expected = grunt.file.read('test/expected/amd_with_file_path_name').replace(/\s|\n/g,'');
    test.equal(actual, expected, 'accept esperanto options using the file path as the amd name.');

    test.done();
  },
  umd: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/umd').replace(/\s|\n/g,'');
    var expected = grunt.file.read('test/expected/umd').replace(/\s|\n/g,'');
    test.equal(actual, expected, 'should describe what the umd behavior is.');

    test.done();
  }
};
