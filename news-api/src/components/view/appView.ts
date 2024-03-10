import { IResponse } from '../../types/index';
import { News, INews, IData } from './news/news';
import { Sources, ISources } from './sources/sources';

export class AppView {
    news: INews;
    sources: ISources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
