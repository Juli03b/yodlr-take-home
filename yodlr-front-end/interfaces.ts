interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    state: "pending" | "active";
}

export {User}