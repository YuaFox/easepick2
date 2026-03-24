# @yuafox/easepick2

Bundle of easepick2.
Includes all packages.

## Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick2</title>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="datepicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
        ],
      });
    </script>
  </body>
</html>
```

## Installation

#### NPM

```bash
npm install @yuafox/easepick2
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

If you're using a bundler, e.g. [webpack](https://webpack.js.org/), you'll need to import easepick2.

```ts
import { easepick } from '@yuafox/easepick2';
```

Now you can create an `easepick` instance.

```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
});
```

### Using viewMode

```js
// Month picker
const monthPicker = new easepick.create({
  element: document.getElementById('monthpicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
  viewMode: 'month',
});

// Year picker
const yearPicker = new easepick.create({
  element: document.getElementById('yearpicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
  viewMode: 'year',
});
```

## Options
See options in [@yuafox/easepick2-core](/packages/core) and other packages.

<ClientOnly>
  <autoversion/>
</ClientOnly>
