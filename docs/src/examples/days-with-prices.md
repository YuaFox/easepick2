# Days with prices

### Demo

<examples-days-with-prices />

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
          '/css/demo_prices.css',
        ],
        setup(picker) {
          picker.on('view', (evt) => {
            const { view, date, target } = evt.detail;
            const d = date ? date.format('YYYY-MM-DD') : null;
            if (view === 'CalendarDay' && d) {
              const span = target.querySelector('.day-price') || document.createElement('span');
              span.className = 'day-price';
              span.innerHTML = `$ ${Math.floor(Math.random() * 150 + 50)}`;
              target.append(span);
            }
          });
        }
      });
    </script>
  </body>
</html>
```

<ClientOnly>
  <autoversion/>
</ClientOnly>
