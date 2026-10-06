import { Core } from '@yuafox/easepick2-core';
import { RangePlugin } from '@yuafox/easepick2-range-plugin';
import { TimePlugin } from '../src/index';

function createPicker(plugins) {
  const element = document.createElement('input');
  document.body.appendChild(element);

  return new Core({
    element,
    autoApply: true,
    inline: true,
    plugins,
    RangePlugin: {
      startDate: '2022-01-10',
      endDate: '2022-01-12',
    },
  } as any);
}

function changeSelect(picker: Core, name: string, value: string) {
  const select = picker.ui.container.querySelector(`select[name="${name}"]`) as HTMLSelectElement;
  select.value = value;
  select.dispatchEvent(new Event('change', { bubbles: true }));
}

describe('TimePlugin', () => {
  it.each([
    ['RangePlugin first', [RangePlugin, TimePlugin]],
    ['TimePlugin first', [TimePlugin, RangePlugin]],
  ])('includes picked time in range dates (%s)', (_, plugins) => {
    const picker = createPicker(plugins);

    changeSelect(picker, 'start[HH]', '10');
    changeSelect(picker, 'end[HH]', '18');

    expect(picker.getStartDate().getHours()).toBe(10);
    expect(picker.getEndDate().getHours()).toBe(18);
  });

  it('triggers select on time change when autoApply is enabled', () => {
    const picker = createPicker([RangePlugin, TimePlugin]);
    const onSelect = jest.fn();
    picker.on('select', onSelect);

    changeSelect(picker, 'start[HH]', '10');

    expect(onSelect).toHaveBeenCalledTimes(1);
    const { start, end } = onSelect.mock.calls[0][0].detail;
    expect(start.getHours()).toBe(10);
    expect(end).toBeInstanceOf(Date);
  });
});
