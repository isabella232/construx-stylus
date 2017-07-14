# construx-stylus

[![Build Status](https://travis-ci.org/krakenjs/construx-stylus.svg?branch=master)](https://travis-ci.org/krakenjs/construx-stylus)
[![NPM version](https://badge.fury.io/js/construx-stylus.png)](http://badge.fury.io/js/construx-stylus)

[construx](https://github.com/krakenjs/construx) plugin for JIT-compiling stylus resources during development of [express](http://expressjs.com/) applications.


## Usage

### Install

```shell
$ npm install --save-dev construx-stylus
```

### Configure

Where you configure your construx plugins:

```json
{
  "stylus": {
    "module": "path:./lib/stylus",
    "files": "/css/**/*.css",
    "plugins": ["nib", "jeet"],
    "ext": "styl"
  }
}
```


_Note: See [construx README](https://github.com/krakenjs/construx/blob/master/README.md) for general usage of construx_
