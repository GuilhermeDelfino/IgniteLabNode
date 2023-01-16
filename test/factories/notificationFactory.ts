import { Notification, NotificationProps } from '@app/entities/notification';

export const createNotification = (props?: Partial<NotificationProps>) => {
    return new Notification({
        ...props,
        category: 'category',
        content: 'content',
        recipientId: 'recipient-id',
    });
};
