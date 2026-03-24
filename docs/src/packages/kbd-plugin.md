# @yuafox/easepick2-kbd-plugin

::: tip
This package does not need to be installed if you are using [@yuafox/easepick2](/packages/bundle).
:::

Adds keyboard navigation.

## Installation

#### NPM

```bash
npm install @yuafox/easepick2-core @yuafox/easepick2-kbd-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@yuafox/easepick2-kbd-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

```ts
import { easepick } from '@yuafox/easepick2-core';
import { KbdPlugin } from '@yuafox/easepick2-kbd-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@yuafox/easepick2-core@[version.number]/dist/index.css',
  ],
  plugins: [KbdPlugin],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [unitIndex](#option-unitIndex) | number | 1 | `tabIndex` for elements except days elements.
| [dayIndex](#option-dayIndex) | number | 2 | `tabIndex` for days elements.

<ClientOnly>
  <autoversion/>
</ClientOnly>
