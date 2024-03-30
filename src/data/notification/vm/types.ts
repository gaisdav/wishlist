import { DefaultColorPalette } from '@mui/joy/styles/types';

export interface INotification {
  type: DefaultColorPalette;
  message: string;
  /**
   * Duration in milliseconds
   */
  duration?: number;
}

export interface INotificationVM {
  notification: INotification | null;

  successNotification(message: string): void;
  errorNotification(message: string | Error | unknown): void;

  addNotification(notification: INotification): void;
  removeNotification(): void;
}
