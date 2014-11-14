# grunt-esperanto

> Wrapper for the [esperanto](https://github.com/rich-harris/esperanto) module transpiler

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-esperanto --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-esperanto');
```

## The "esperanto" task

### Overview
In your project's Gruntfile, add a section named `esperanto` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  esperanto: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `'\n'`

A string to place between concatenated files.

#### options.type
Type: `String`
Default value: `'amd'`

Pass `'commonjs'` or `'cjs'` to output CommonJS modules instead of AMD modules.

### Usage Examples

```js
grunt.initConfig({
  esperanto: {
    options: {
      type: 'cjs',
    },
    files: {
      expand: true,
      cwd: 'src/es6',
      src : ['**/*.js'],
      dest: 'dest/out.js'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
