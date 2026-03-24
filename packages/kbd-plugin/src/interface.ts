import { IBaseConfig } from '@yuafox/easepick2-base-plugin';

export interface IKbdPlugin extends IBaseConfig {
  unitIndex?: number;
  dayIndex?: number;
  html?: string;
}

declare module '@yuafox/easepick2-core/dist/types' {
  interface IKbdPlugin {
    KbdPlugin?: IKbdPlugin;
  }
}
