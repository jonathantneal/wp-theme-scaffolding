# WP Theme Scaffolding

Skeleton markup for new WordPress themes.

## Features

**Stylesheet** files are compiled from **Sass** with **libsass**.

**JavaScript** files are combined and compressed with [UglifyJS](https://github.com/mishoo/UglifyJS2#readme), and quality is enforced with [JSHint](http://jshint.com/about/).

**PHP** quality is enforced with [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer#readme).

**Git** [hooks](http://git-scm.com/docs/githooks) are available to compile, compress, and re-add files to the repository before each commit.

A **watch** task is included that supports [live reloading](https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html) of CSS and JS files. To enable live reload in your theme, add a script tag before your closing `</body>` tag pointing to the live reload script:

```html
<script src="//localhost:35729/livereload.js"></script>
```

## Scaffolding

```
/theme
.. /assets
.. .. /css
.. .. .. /src
.. .. /images
.. .. .. /src
.. .. /js
.. .. .. /src

.gitattributes
.gitignore
.jshintrc

Gruntfile.js
package.json
project.ruleset.xml
style.css
```

### Stylesheets

Stylesheets go into the [assets/css](assets/css) directory.

### Scripts

Scripts go into the [assets/js](assets/js) directory.

### Images

Images go into the [assets/images](assets/js) directory.
