export interface CartUi {
    isVisible: boolean;
    notification: NotificationProp | null;
}

export interface NotificationProp {
    status?: string;
    title?: string;
    message?: string;
}
