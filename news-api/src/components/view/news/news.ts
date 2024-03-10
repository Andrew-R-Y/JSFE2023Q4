import { IData } from '../../../types/index';
import './news.css';

interface INews {
    draw: (data: IData[]) => void;
}

class News implements INews {
    draw(data: IData[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp')!;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;

            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            newsClone.querySelector<HTMLDivElement>('.news__meta-photo')!.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title')!.textContent = item.title;
            newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector('.news__description-content')!.textContent = item.description;
            newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export { News, INews, IData };
