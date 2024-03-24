export type User = {
    id: number;
    email: string;
    password: string;
    spaces: Space[];
};

export type Space = {
    id: number;
    title: string;
    description: string;
    user: User;
    userId: number;
};
