import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

// resources/js/types/index.ts
export interface Activity {
    id: number;
    application_name: string;
    start_time: string; // Les dates sont des chaînes
    end_time: string | null; // Peut être null
}
