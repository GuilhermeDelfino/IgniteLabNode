import { randomUUID } from 'crypto';

export type NotificationProps = {
    id?: string;
    recipientId: string;
    content: string;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
};
export class Notification {
    private props: Required<NotificationProps>;
    constructor(props: Omit<NotificationProps, 'readAt' | 'createdAt'>) {
        this.props = {
            ...props,
            id: props.id || randomUUID(),
            createdAt: new Date(),
            readAt: null,
        };
    }

    get id() {
        return this.props.id;
    }
    get content() {
        return this.props.content;
    }
    get category() {
        return this.props.category;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get readAt() {
        return this.props.readAt;
    }
}
