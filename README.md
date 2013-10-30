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
    }
});

grunt.loadNpmTasks('grunt-nunjucks');
```

Grunt provides several ways to specify file sources and destinations.
Read more about how to configure the files
[here](http://gruntjs.com/configuring-tasks#files).

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

The nunjucks `Environment` object to use at compile-time. You need
this if you use extensions or asynchronous filters. See
[Precompiling](http://jlongster.github.com/nunjucks/api.html#api1).

#### options.asFunction
Type: `Boolean` (default: `false`)

Compile each template as a callable function. Use this if you want to
compile each template file into a separate js file as a simple
callable object.

#### options.rename
Type: `function(filepath) : string` (optional)

If present, this function is called once per template file.  It is passed
the filepath of the template and should return a name for the compiled
template.

If this option isn't present, the filepath will be the name of the template.
