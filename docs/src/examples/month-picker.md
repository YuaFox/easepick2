# Month picker

### Demo

<examples-month-picker />

### Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick2 - Month Picker</title>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="monthpicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('monthpicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
        ],
        viewMode: 'month',
      });
    </script>
  </body>
</html>
```

The month picker displays a 4×3 grid of months. The header navigation moves by year.

You can combine it with plugins like RangePlugin for month range selection:

```js
const picker = new easepick.create({
  element: document.getElementById('monthpicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
  viewMode: 'month',
  plugins: [RangePlugin],
});
```

<ClientOnly>
  <autoversion/>
</ClientOnly>
