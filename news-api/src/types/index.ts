export interface IResponse {
    status: string;
    sources: IData[];
}

export interface IData {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    publishedAt: string;
    author: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    urlToImage?: string;
}
