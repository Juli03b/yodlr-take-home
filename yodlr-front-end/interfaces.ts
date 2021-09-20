export interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
    state: "pending" | "active";
}
export interface UserDataGrid extends User {
    delete: () => Promise<void>;
}
export interface UserRegister {
    firstName: string;
    lastName: string;
    email: string;
}

