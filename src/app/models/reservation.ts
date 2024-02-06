export interface Reservation {
    id: string,
    fullName: string,
    email: string,
    bookName: string,
    bookSIREN: number,
    borrowDate: Date,
    returnDate: Date
}
