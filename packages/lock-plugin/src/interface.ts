import { DateTime } from '@yuafox/easepick2-datetime';
import { IBaseConfig } from '@yuafox/easepick2-base-plugin';

export interface ILockConfig extends IBaseConfig {

  minDate?: Date | string | number;
  maxDate?: Date | string | number;
  minDays?: number;
  maxDays?: number;
  selectForward?: boolean;
  selectBackward?: boolean;
  presets?: boolean;
  inseparable?: boolean;
  filter?: (date: DateTime | DateTime[], picked: DateTime[]) => boolean;
}

declare module '@yuafox/easepick2-core/dist/types' {
  interface IPickerConfig {
    LockPlugin?: ILockConfig;
  }
}
