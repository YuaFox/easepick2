# Year picker

### Demo

<examples-year-picker />

### Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick2 - Year Picker</title>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="yearpicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('yearpicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
        ],
        viewMode: 'year',
      });
    </script>
  </body>
</html>
```

The year picker displays a 4×3 grid of years. The header navigation moves by decade.

You can combine it with plugins like RangePlugin for year range selection:

```js
const picker = new easepick.create({
  element: document.getElementById('yearpicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
  viewMode: 'year',
  plugins: [RangePlugin],
});
```

<ClientOnly>
  <autoversion/>
</ClientOnly>
