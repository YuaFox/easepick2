# Overview

A modern, lightweight date picker with day, month, and year view modes. Fork of the original [easepick](https://github.com/easepick/easepick).

Originally created by Rinat G. (easepick). Forked and maintained by [YuaFox](https://github.com/YuaFox).

<div style="text-align: center; font-size: 25px; display: block; margin-bottom: 15px;">
  <div id="index-demo" class="demo-wrapper" data-cfg="index"></div>
</div>

## What's New in easepick2

### viewMode Option

easepick2 adds support for **month** and **year** view modes in addition to the standard day picker:

| Value | Description |
| --- | --- |
| `'day'` | Default. Standard day-level calendar view. |
| `'month'` | Shows a 4×3 grid of months. Header navigates by year. |
| `'year'` | Shows a 4×3 grid of years. Header navigates by decade. |

All existing plugins (RangePlugin, LockPlugin, AmpPlugin, etc.) work with all view modes.

## Features

- No dependencies
- Uses [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- Supports plugins
- **Day, month, and year view modes**

## Browser compatibility

<browser-compatibility/>

## Packages

### Bundle

| Name | Description
| --- | ---
| [@yuafox/easepick2](/packages/bundle) | **Bundle of easepick2**. Includes all packages.<br/> An easy way to use all the features.

### Core

| Name | Description
| --- | ---
| [@yuafox/easepick2-core](/packages/core) | Main package of easepick2.
| [@yuafox/easepick2-datetime](/packages/datetime) | DateTime package.
| [@yuafox/easepick2-base-plugin](/packages/base-plugin) | Base plugin. <br/> Required for other plugins and for development.

### Plugins

| Name | Description
| --- | ---
| [@yuafox/easepick2-amp-plugin](/packages/amp-plugin) | Amp plugin. <br/> Adds extra options.
| [@yuafox/easepick2-kbd-plugin](/packages/kbd-plugin) | Keyboard plugin. <br/> Adds keyboard navigation.
| [@yuafox/easepick2-lock-plugin](/packages/lock-plugin) | Lock plugin. <br/> Adds the ability to disable days/months/years for selection.
| [@yuafox/easepick2-preset-plugin](/packages/preset-plugin) | Preset plugin. <br/> Adds predefined ranges.
| [@yuafox/easepick2-range-plugin](/packages/range-plugin) | Range plugin. <br/> Adds the ability to select a range of dates/months/years.
| [@yuafox/easepick2-time-plugin](/packages/time-plugin) | Time plugin. <br/> Adds time picker.

---

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html).

Originally created by [Rinat G.](https://github.com/wakirin) Forked and maintained by [YuaFox](https://github.com/YuaFox).
