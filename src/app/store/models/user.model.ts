export interface User {
    id: string;
    volumeInfo: {
        title: string;
        authors: Array<string>;
    };
}
