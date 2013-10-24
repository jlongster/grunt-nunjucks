# grunt-nunjucks

A grunt task to precompile your nunjucks templates easily. Use this in
combination with
[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
to automatically precompile your templates on change.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nunjucks --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nunjucks');
```

## The "nunjucks" task

### Overview
In your project's Gruntfile, add a section named `nunjucks` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  nunjucks: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

A real example:

```js
grunt.initConfig({
    nunjucks: {
        precompile: {
            src: 'views/*',
            dest: 'static/js/templates.js'
        }
    },

    watch: {
        nunjucks: {
            files: tmpls,
            tasks: ['nunjucks']
        }
    }
});

grunt.loadNpmTasks('grunt-nunjucks');
```

This is really powerful when combing with
[`grunt-contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch).
This will automatically precompile your templates every time one of
them is changed, so you can simply use precompile template in
development too. That makes deployment easier since you're using the
same configuration as production.

```
    watch: {
        nunjucks: {
            files: 'views/*',
            tasks: ['nunjucks']
        }
    }
```

### Options

#### options.env
Type: `nunjucks.Environment`
Default value: `null`

The nunjucks `Environment` object to use at compile-time. You need
this if you use extensions or asynchronous filters. See
[Precompiling](http://jlongster.github.com/nunjucks/api.html#api1).

#### options.asFunction
Type: `Boolean`
Default value: `false`

Compile each template as a callable function. Use this if you want to
compile each template file into a separate js file as a simple
callable object.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  nunjucks: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  nunjucks: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
