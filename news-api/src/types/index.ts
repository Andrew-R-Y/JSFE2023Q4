export interface IResponse {
    status: string;
    totalResults: number;
    articles: IData[];
}

export interface IData {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}
