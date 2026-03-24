# @yuafox/easepick2-preset-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds predefined ranges.

### Required:
* [@yuafox/easepick2-range-plugin](/packages/range-plugin)

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-preset-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-preset-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

```ts
import { easepick } from '@yuafox/easepick2-core';
import { RangePlugin } from '@yuafox/easepick2-range-plugin';
import { PresetPlugin } from '@yuafox/easepick2-preset-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-range-plugin@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-preset-plugin@[version.number]/dist/index.css',
  ],
  plugins: [RangePlugin, PresetPlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [customPreset](#option-customPreset) | object | null | Define your own ranges.
| [customLabels](#option-customLabels) | array | null | Define your own labels.
| [position](#option-position) | string | 'left' | Position of preset block.

<ClientOnly>
  <autoversion/>
</ClientOnly>
