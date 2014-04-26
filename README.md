## URL String Helpers for the Browser or Node.js

Some helper functions for handling cookies in the browser.

## Node Install

    npm install git://github.com/clusterfoo/url-helpers

## Browser Install

#### Method 1:

Simply require `url.js` in your HTML.


####Method 2:

    bower install clusterfoo/url-helpers

## How to Use

####Method 1:

If you are using [browserify](http://browserify.org/), simply

```js
var URL = require('clusterfoo.url-helpers');
URL.build( ... );
```

Please use browserify.

#### Method 2:


```html
<script src="/path/to/url.js"></script>
<script>
    // initialize url.js
    Clusterfoo();
</script>
```

This will make the `Clusterfoo.url` object available globally:

```js
Clusterfoo.url.build( ... );
```

## API

`URL.build(host[, path [, queryParams]])`:

* host: a valid scheme and domain.
* path: a valid path. (Optional)
* queryParams: a hash of query parameters. (Optional)

Example:

```js
URL.build("http://example.com", "/path/to/thing", { "success": "true" });
// -> http://example.com/path/to/thing?success=true;

URL.build("http://example.com", { "success": "true" });
// -> http://example.com?success=true;
```

---

The MIT License (MIT)

Copyright (c) 2014 Noam Gagliardi-Rabinovich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
