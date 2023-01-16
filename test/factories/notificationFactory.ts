import { Notification, NotificationProps } from '@app/entities/notification';
import { Categories } from '@app/entities/notification/category';

export const createNotification = (props?: Partial<NotificationProps>) => {
    return new Notification({
        category: Categories.SIMPLE,
        content: 'content',
        recipientId: 'recipient-id',
        ...props,
    });
};
