import { DateTime } from '@yuafox/easepick2-datetime';
import { IBaseConfig } from '@yuafox/easepick2-base-plugin';

export interface ITimeConfig extends IBaseConfig {
  native?: boolean;
  seconds?: boolean;
  stepHours?: number;
  stepMinutes?: number;
  stepSeconds?: number;
  format12?: boolean;
}

declare module '@yuafox/easepick2-core' {
  interface Core {
    getDate(): DateTime;
    getStartDate(): DateTime;
    getEndDate(): DateTime;
    setTime(value: string): void;
    setStartTime(value: string): void;
    setEndTime(value: string): void;
  }
}

declare module '@yuafox/easepick2-core/dist/types' {
  interface IPickerConfig {
    TimePlugin?: ITimeConfig;
  }
}