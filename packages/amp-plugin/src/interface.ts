import { IBaseConfig } from '@yuafox/easepick2-base-plugin';

export interface IAmpPlugin extends IBaseConfig {
  dropdown?: {
    minYear?: number;
    maxYear?: number;
    months?: boolean;
    years?: boolean | string;
  }
  resetButton?: (() => boolean) | boolean;
  darkMode?: boolean;
  weekNumbers?: boolean;
  locale?: {
    resetButton?: string;
  }
}

declare module '@yuafox/easepick2-core/dist/types' {
  interface IPickerConfig {
    AmpPlugin?: IAmpPlugin;
  }
}
