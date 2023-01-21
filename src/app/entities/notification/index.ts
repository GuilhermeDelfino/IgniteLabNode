import { randomUUID } from 'crypto';
import { Categories } from './category';
import { Content } from './content';

export type NotificationProps = {
    id?: string;
    recipientId: string;
    content: string;
    category: Categories;
    readedAt?: Date | null;
    createdAt?: Date;
    canceledAt?: Date | null;
};
export type NotificationAttributes = {
    id?: string;
    recipientId: string;
    content: Content;
    category: Categories;
    readedAt?: Date | null;
    createdAt: Date;
    canceledAt?: Date | null;
};
export class Notification {
    private props: Required<NotificationAttributes>;

    constructor(props: NotificationProps) {
        this.props = {
            ...props,
            content: Content.of(props.content),
            id: props.id || randomUUID(),
            createdAt: new Date(),
            readedAt: props.readedAt || null,
            canceledAt: props.canceledAt || null,
        };
    }

    get id() {
        return this.props.id;
    }

    get content() {
        return this.props.content.value;
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

    get readedAt() {
        return this.props.readedAt;
    }

    get canceledAt() {
        return this.props.canceledAt;
    }

    cancel() {
        this.props.canceledAt = new Date();
    }

    read() {
        this.props.readedAt = new Date();
    }

    unread() {
        this.props.readedAt = null;
    }
}
