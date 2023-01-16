import { randomUUID } from 'crypto';
import { Categories } from './category';
import { Content } from './content';

export type NotificationProps = {
    id?: string;
    recipientId: string;
    content: string;
    category: Categories;
    readAt?: Date | null;
    createdAt: Date;
};
export type NotificationAttributes = {
    id?: string;
    recipientId: string;
    content: Content;
    category: Categories;
    readAt?: Date | null;
    createdAt: Date;
};
export class Notification {
    private props: Required<NotificationAttributes>;
    constructor(props: Omit<NotificationProps, 'readAt' | 'createdAt'>) {
        this.props = {
            ...props,
            content: Content.of(props.content),
            id: props.id || randomUUID(),
            createdAt: new Date(),
            readAt: null,
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
}
