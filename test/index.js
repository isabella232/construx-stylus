/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Stylus = require(path.resolve(__dirname, '..')),
  stylus = Stylus({plugins: ['nib']}),
  fs = require('fs');

test('construx-stylus', function (t) {

    t.test('processes a good styl file', function (t) {
        t.plan(2);
        fs.readFile(path.resolve(__dirname, 'css/good.styl'), function (err, data) {
            stylus(data, {paths: '', context: {name: 'styl.compiled'}}, function (err, compiled) {
                t.ok(compiled.indexOf('-webkit-border-radius: 5px;') !== -1);
                t.ok(compiled.indexOf('-webkit-linear-gradient(top, #fff, #000);') !== -1);
                t.end();
            });

        });

    });

    t.test('processes a bad styl file', function (t) {
        t.plan(1);
        fs.readFile(path.resolve(__dirname, 'css/bad.styl'), function (err, data) {
            stylus(data, {paths: '', context: {name: 'styl.compiled'}}, function (err, compiled) {
                t.ok(err.name === 'ParseError');
                t.end();
            });

        });

    });

});