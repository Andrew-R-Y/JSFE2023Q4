export interface IResponse {
    status: string;
    totalResults: number;
    articles: IData[];
}

export interface ISource {
    id: string;
    name: string;
}

export interface IData {
    source: ISource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content: string;
}
