import { makeAutoObservable } from 'mobx';
import { INotification, INotificationVM } from './types.ts';
import { AxiosError } from 'axios';

export class NotificationsVM implements INotificationVM {
  notification: INotification | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  successNotification = (message: string): void => {
    this.addNotification({
      type: 'success',
      message: message,
    });
  };

  errorNotification = (error: string | Error | unknown): void => {
    let message = 'Unknown error';

    if (error instanceof AxiosError) {
      // TODO add error type
      message = error.response?.data?.errorMessage ?? error.message;
    } else if (error instanceof Error) {
      message = `${error.name} ${error.message}`;
    } else if (typeof error === 'string') {
      message = error;
    }

    this.addNotification({
      type: 'danger',
      message,
    });
  };

  addNotification = (notification: INotification): void => {
    this.notification = notification;
  };

  removeNotification = (): void => {
    this.notification = null;
  };
}
