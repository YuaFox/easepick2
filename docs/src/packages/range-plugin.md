# @yuafox/easepick2-range-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds the ability to select a range of dates, months, or years (depending on `viewMode`).

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
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="datepicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.css',
        ],
        plugins: ['RangePlugin'],
        RangePlugin: {
          tooltip: true,
        },
      });
    </script>
  </body>
</html>
```

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-range-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

If you're using a bundler, e.g. [webpack](https://webpack.js.org/):

```ts
import { easepick } from '@yuafox/easepick2-core';
import { RangePlugin } from '@yuafox/easepick2-range-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.css',
  ],
  plugins: [RangePlugin],
});
```

### Month range selection

```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  viewMode: 'month',
  plugins: [RangePlugin],
});
```

### Year range selection

```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  viewMode: 'year',
  plugins: [RangePlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [elementEnd](#option-elementEnd) | HTMLElement <br/> string | null | Bind the datepicker to a element for end date.
| [startDate](#option-startDate) | Date <br/> string <br/> number  | null | Preselect start date.
| [endDate](#option-endDate) | Date <br/> string <br/> number  | null | Preselect end date.
| [repick](#option-repick) | boolean | false | If date range is already selected, then user can change only one of start date or end date.
| [strict](#option-strict) | boolean | true | Disabling the option allows you to select an incomplete range.
| [delimiter](#option-delimiter) | string | ' - ' | Delimiter between dates.
| [tooltip](#option-tooltip) | boolean | true | Showing tooltip with how much days will be selected.
| [tooltipNumber](#option-tooltipNumber) | function |  | Handling the tooltip number.
| [locale](#option-locale) | object | { one: 'day', other: 'days' } | Text for the tooltip.

## Methods

| Name  | Description
| --- | ---
| [setDateRange](#method-setDateRange) | Set date range.
| [setStartDate](#method-setStartDate) | Set start of date range.
| [setEndDate](#method-setEndDate) | Set end of date range.
| [getStartDate](#method-getStartDate) | Return current start of date range as [DateTime](/packages/datetime) Object.
| [getEndDate](#method-getEndDate) | Return current end of date range as [DateTime](/packages/datetime) Object.

<ClientOnly>
  <autoversion/>
</ClientOnly>
