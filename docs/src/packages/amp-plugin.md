# @yuafox/easepick2-amp-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds extra options.

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-amp-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-amp-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

```ts
import { easepick } from '@yuafox/easepick2-core';
import { AmpPlugin } from '@yuafox/easepick2-amp-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2@[version.number]/dist/index.css',
  ],
  plugins: [AmpPlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [dropdown](#option-dropdown) | object | { minYear: 1950, maxYear: null, months: false, years: false } | Enable dropdowns for months, years.
| [resetButton](#option-resetButton) | boolean <br/> function | false | Adds a reset button to clear the current selection.
| [darkMode](#option-darkMode) | boolean | true | Allows dark mode if the user's system settings are set to dark mode.
| [weekNumbers](#option-weekNumbers) | boolean | false | Show week numbers.

<ClientOnly>
  <autoversion/>
</ClientOnly>
