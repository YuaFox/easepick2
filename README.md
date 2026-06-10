# easepick2

easepick2 is an actively maintained alternative to [easepick](https://github.com/easepick/easepick) — a modern, lightweight date picker with day, month, and year view modes.

Originally created by Rinat G. (easepick). Forked and actively maintained by [YuaFox](https://github.com/YuaFox).

## Installation

```bash
npm install @yuafox/easepick2
```

## Basic Usage

```js
import { easepick } from '@yuafox/easepick2';

// Day picker (default)
const dayPicker = new easepick.create({
  element: '#datepicker',
  css: ['https://cdn.jsdelivr.net/npm/@yuafox/easepick2/dist/index.css'],
});

// Month picker
const monthPicker = new easepick.create({
  element: '#monthpicker',
  css: ['https://cdn.jsdelivr.net/npm/@yuafox/easepick2/dist/index.css'],
  viewMode: 'month',
});

// Year picker
const yearPicker = new easepick.create({
  element: '#yearpicker',
  css: ['https://cdn.jsdelivr.net/npm/@yuafox/easepick2/dist/index.css'],
  viewMode: 'year',
});
```

## viewMode Option

| Value   | Description                                          |
|---------|------------------------------------------------------|
| `'day'` | Default. Standard day-level calendar view.           |
| `'month'` | Shows a 4x3 grid of months. Header navigates by year. |
| `'year'` | Shows a 4x3 grid of years. Header navigates by decade. |

## Using with Plugins

All existing plugins work with all view modes:

```js
import { easepick, RangePlugin, LockPlugin } from '@yuafox/easepick2';

const picker = new easepick.create({
  element: '#datepicker',
  css: ['https://cdn.jsdelivr.net/npm/@yuafox/easepick2/dist/index.css'],
  viewMode: 'month',
  plugins: [RangePlugin, LockPlugin],
  RangePlugin: {
    tooltip: false,
  },
  LockPlugin: {
    minDate: new Date(),
  },
});
```

## Available Plugins

- **RangePlugin** — date/month/year range selection
- **LockPlugin** — disable specific dates/months/years
- **PresetPlugin** — predefined date ranges
- **TimePlugin** — time selection
- **KbdPlugin** — keyboard navigation
- **AmpPlugin** — additional month/year pickers

## Packages

| Package | npm |
|---------|-----|
| `@yuafox/easepick2` | Bundle (recommended) |
| `@yuafox/easepick2-core` | Core picker |
| `@yuafox/easepick2-datetime` | DateTime utility |
| `@yuafox/easepick2-base-plugin` | Base plugin class |
| `@yuafox/easepick2-range-plugin` | Range selection |
| `@yuafox/easepick2-lock-plugin` | Date locking |
| `@yuafox/easepick2-preset-plugin` | Preset ranges |
| `@yuafox/easepick2-time-plugin` | Time selection |
| `@yuafox/easepick2-kbd-plugin` | Keyboard navigation |
| `@yuafox/easepick2-amp-plugin` | AMP plugin |

## License

MIT
