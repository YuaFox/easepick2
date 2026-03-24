# @yuafox/easepick2-core

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Main package of easepick2.

## Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick2</title>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="datepicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
        ],
      });
    </script>
  </body>
</html>
```

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

If you're using a bundler, e.g. [webpack](https://webpack.js.org/), you'll need to import easepick2.

```ts
import { easepick } from '@yuafox/easepick2-core';
```

Now you can create an `easepick` instance.

```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
  ],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [element](#option-element) | HTMLElement <br/> string | null | Bind the datepicker to a element. Also is possible to bind to any element (not input) for example you need inline calendar.
| [doc](#option-doc) | Document <br/> ShadowRoot | document | May be required if you need to pass ShadowRoot.
| [css](#option-css) | string <br/> array <br/> function | [] | Pass a CSS file for picker. Don't mix types, if you are using css link then array should only contain links.
| [firstDay](#option-firstDay) | number | 1 | Day of start week. (0 - Sunday, 1 - Monday, 2 - Tuesday, etc...)
| [lang](#option-lang) | string | en-US | Language. <br/>This option affect to day names, month names via [Date.prototype.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) and also affect to plural rules via [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules).
| [date](#option-date) | Date <br/> string <br/> number | null | Preselect date. <br/> Date Object or Unix Timestamp (with milliseconds) or String (must be equal to option format).
| [format](#option-format) | string | YYYY-MM-DD | The default output format. <br/> See [tokens format](/packages/datetime#tokens-format).
| [grid](#option-grid) | number | 1 | Number of calendar columns.
| [calendars](#option-calendars) | number | 1 | Number of visible months.
| [readonly](#option-readonly) | boolean | true | Add `readonly` attribute to `element`.
| [autoApply](#option-autoApply) | boolean | true | Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.
| [zIndex](#option-zIndex) | number | null | zIndex of picker.
| [inline](#option-inline) | boolean | false | Show calendar inline.
| [header](#option-header) | boolean <br/> string <br/> HTMLElement | false | Add header to calendar.
| [viewMode](#option-viewMode) | string | 'day' | Calendar view mode. Options: `'day'`, `'month'`, `'year'`. <br/> **`'month'`**: Shows a 4×3 grid of months, header navigates by year. <br/> **`'year'`**: Shows a 4×3 grid of years, header navigates by decade.
| [locale](#option-locale)| object | { nextMonth, previousMonth, cancel, apply } | Icon and text for buttons.
| [documentClick](#option-documentClick) | boolean <br/> function | function | Hide picker on click outside picker element.
| [setup](#option-setup) | function | null |
| [plugins](#option-plugins) | array | [] | List of plugins.

## Methods

| Name  | Description
| --- | ---
| [version](#method-version) | return version of picker.
| [isShown()](#method-isShown) | Determine if the picker is visible or not.
| [show()](#method-show) | Show the picker.
| [hide()](#method-hide) | Hide the picker.
| [clear()](#method-clear) | Clear the picker selection.
| [gotoDate(date)](#method-gotoDate) | Change visible month.
| [setDate(date)](#method-setDate) | Set date programmatically.
| [getDate()](#method-getDate) | Get selected date.
| [on(type, listener, options)](#method-on) | Add listener to container element.
| [off(type, listener, options)](#method-off) | Remove listener from container element.
| [trigger(type, detail)](#method-trigger) | Dispatch an event.
| [renderAll()](#method-renderAll) | Redraw the calendar layout.
| [destroy()](#method-destroy) | Destroy the picker.

#### Example
```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
  ],
});
//
picker.setDate('2022-01-01');
```

## Events

Events based on [CustomEvent()](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent).

| Name  | Description
| --- | ---
| [render](#event-render) |
| [view](#event-view) |
| [preselect](#event-preselect) | Event is called on select days (before submit selection). When `autoApply` option is `false`.
| [select](#event-select) | Event is called when selection is submitted.
| [clear](#event-clear) |

It is also allowed to use default events such as `click`, `keydown`, etc.

#### Example
```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
  ],
  setup(picker) {
    picker.on('view', (e) => {
      const { view, date, target } = e.detail;
      // do something
    });
  },
});
```

## PluginManager

`PluginManager` allows you to manage plugins of created picker.

#### Methods

| Name | Description
| --- | ---
| [getInstance(pluginName)](#pluginManager-getInstance) | Returns the plugin instance. `pluginName` is a string (eg.: `RangePlugin`).
| [addInstance(pluginName)](#pluginManager-addInstance) | Adds a plugin to the picker. Returns an instance of the added plugin.
| [removeInstance(pluginName)](#pluginManager-removeInstance) | Removes the plugin from the picker. Returns a boolean result.
| [reloadInstance(pluginName)](#pluginManager-reloadInstance) | Removes the plugin from the picker and adds it again. Returns an instance of the added plugin.

<ClientOnly>
  <autoversion/>
</ClientOnly>
