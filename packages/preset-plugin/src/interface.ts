import { DateTime } from '@yuafox/easepick2-datetime';
import { IBaseConfig } from '@yuafox/easepick2-base-plugin';

export interface IPresetConfig extends IBaseConfig {
  customPreset?: Record<string, unknown>;
  customLabels?: string[];
  position?: string;
}

declare module '@yuafox/easepick2-core' {
  interface Core {
    setStartDate(date: Date | string | number): void;
    setEndDate(date: Date | string | number): void;
    setDateRange(start: Date | string | number, end: Date | string | number): void;
    getStartDate(): DateTime;
    getEndDate(): DateTime;
  }
}
declare module '@yuafox/easepick2-core/dist/types' {
  interface IPickerConfig {
    PresetPlugin?: IPresetConfig;
  }
}
