import './sources.css';
import { ISource } from '../../../types/index';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach((item: ISource) => {
            if (sourceItemTemp) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;
                if (sourceClone) {
                    sourceClone.querySelector('.source__item-name')!.textContent = item.name;
                    sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

                    fragment.append(sourceClone);
                }
            }
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
