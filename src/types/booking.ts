export type Booking = {
    id: string;
    event: {
        id: string;
        title: string;
    };
    user: {
        id: string;
        name: string;
    };
    bookingDate: Date;
    createdAt: Date;
    updatedAt: Date;
}