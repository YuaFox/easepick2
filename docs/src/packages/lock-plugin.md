# @yuafox/easepick2-lock-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds the ability to disable days, months, or years for selection (depending on `viewMode`).

## Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick2</title>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-lock-plugin@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="datepicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-lock-plugin@[version.number]/dist/index.css',
        ],
        plugins: ['LockPlugin'],
        LockPlugin: {
          minDate: new Date(),
        },
      });
    </script>
  </body>
</html>
```

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-lock-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-lock-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

```ts
import { easepick } from '@yuafox/easepick2-core';
import { LockPlugin } from '@yuafox/easepick2-lock-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-lock-plugin@[version.number]/dist/index.css',
  ],
  plugins: [LockPlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [minDate](#option-minDate) | Date <br/> string <br/> number | null | The minimum/earliest date that can be selected.
| [maxDate](#option-maxDate) | Date <br/> string <br/> number | null | The maximum/latest date that can be selected.
| [minDays](#option-minDays) | number | null | The minimum days of the selected range.
| [maxDays](#option-maxDays) | number | null | The maximum days of the selected range.
| [selectForward](#option-selectForward) | boolean | false | Select second date after the first selected date.
| [selectBackward](#option-selectBackward) | boolean | false | Select second date before the first selected date.
| [presets](#option-presets) | boolean | true | Disable unallowed presets (when PresetPlugin is included).
| [inseparable](#option-inseparable) | boolean | false | Disable date range selection with locked days.
| [filter](#option-filter) | function | null | Lock days/months/years by custom function.

<ClientOnly>
  <autoversion/>
</ClientOnly>
