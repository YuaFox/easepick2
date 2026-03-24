import { DateTime } from '@yuafox/easepick2-datetime';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseConfig {}

export interface IPlugin {
  binds?: unknown;
  getName(): string;
  onAttach(): void;
  onDetach(): void;
}

export interface IEventDetail {
  view?: string;
  date?: DateTime;
  target?: HTMLElement;
  index?: number;
}