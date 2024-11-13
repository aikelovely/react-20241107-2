import { createRoot } from 'react-dom/client';
import { restaurants } from './constants/mock.js';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
    <div style={{columns: '100px 4'}}>
        <div>
            <h1 style={{color: "red", marginTop: '0'}}>{restaurants[0].name}</h1>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[0].menu[0].name}</li>
                <li>{restaurants[0].menu[1].name}</li>
                <li>{restaurants[0].menu[2].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[0].reviews[0].text}</li>
                <li>{restaurants[0].reviews[1].text}</li>
            </ul>
        </div>
        <div>
            <h1 style={{color: "red"}}>{restaurants[1].name}</h1>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[1].reviews[0].text}</li>
                <li>{restaurants[1].reviews[1].text}</li>
                <li>{restaurants[1].reviews[2].text}</li>
            </ul>
        </div>
        <div>
            <h1 style={{color: "red"}}>{restaurants[2].name}</h1>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[2].reviews[0].text}</li>
            </ul>
        </div>
        <div>
            <h1 style={{color: "red"}}>{restaurants[3].name}</h1>
            <h3>Меню</h3>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{restaurants[3].reviews[0].text}</li>
                <li>{restaurants[3].reviews[1].text}</li>
            </ul>
        </div>
    </div>
);


