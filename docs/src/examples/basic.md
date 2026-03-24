# Basic example

### Demo

<examples-basic />

### Quick example

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

<ClientOnly>
  <autoversion/>
</ClientOnly>
