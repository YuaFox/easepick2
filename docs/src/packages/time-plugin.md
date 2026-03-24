# @yuafox/easepick2-time-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds time picker.

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-time-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-time-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

```ts
import { easepick } from '@yuafox/easepick2-core';
import { TimePlugin } from '@yuafox/easepick2-time-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-time-plugin@[version.number]/dist/index.css',
  ],
  plugins: [TimePlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [seconds](#option-seconds) | boolean | false | Enable seconds picker.
| [stepHours](#option-stepHours) | number | 1 | Step for hours.
| [stepMinutes](#option-stepMinutes) | number | 5 | Step for minutes.
| [stepSeconds](#option-stepSeconds) | number | 5 | Step for seconds.
| [format12](#option-format12) | boolean | false | Display 12H time.

## Methods

| Name  | Description
| --- | ---
| [setTime](#method-setTime) | Set a time for single date picker.
| [setStartTime](#method-setStartTime) | Set start time of date range.
| [setEndTime](#method-setEndTime) | Set end time of date range.

<ClientOnly>
  <autoversion/>
</ClientOnly>
