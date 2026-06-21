export type User = {
    id: string;
    name: string;
    email: string;
    type: 'user' | 'organizer';
    createdAt: Date;
    updatedAt: Date;
}