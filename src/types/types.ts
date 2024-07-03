export type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

export enum Filter {
    'all' = 'All',
    'atWork' = 'At work',
    'completed' = 'Completed'
};
