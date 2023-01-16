import { randomUUID } from 'crypto';
import { Categories } from './category';
import { Content } from './content';

export type NotificationProps = {
    id?: string;
    recipientId: string;
    content: string;
    category: Categories;
    readAt?: Date | null;
    createdAt?: Date;
    cancelAt?: Date | null;
};
export type NotificationAttributes = {
    id?: string;
    recipientId: string;
    content: Content;
    category: Categories;
    readAt?: Date | null;
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
            readAt: null,
            canceledAt: null,
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
    get readAt() {
        return this.props.readAt;
    }
    get canceledAt() {
        return this.props.canceledAt;
    }
    cancel() {
        this.props.canceledAt = new Date();
    }
    read() {
        this.props.readAt = new Date();
    }
}
