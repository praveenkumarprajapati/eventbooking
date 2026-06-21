export type EventType = {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    organizer: {
        id: string;
        name: string;
        email: string;
    };
    createdAt: Date;
    updatedAt: Date;
}