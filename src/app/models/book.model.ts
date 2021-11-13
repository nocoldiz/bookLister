interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface Book {
    id: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: Array<string>;
        publisher: string;
        publishedDate: any;
        description: string;
        pageCount: number;
        categories: string[];
        language: string;
        previewLink: string;
        infoLink: string;
        imageLinks: ImageLinks;
    };
}
