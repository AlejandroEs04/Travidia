export type Trip = {
    id: number
    purpose: string
    departureDate: Date
    returnDate: Date
    destiny: string
    origin: string
    originatorId: number
}

export type TripRequest = 
    Pick<Trip, 'departureDate' | 'returnDate' | 'origin' | 'destiny' | 'purpose'>