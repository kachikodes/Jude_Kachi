export class Users {
    constructor(
        public name:string,
        public gender: string,
        public age: string,
        public email: string,
        public phoneNumber: string
    ) {}
}
export interface UserProfile {
    name: string,
    gender: string,
    age: string,
    email?: string,
    phoneNumber?: string
}