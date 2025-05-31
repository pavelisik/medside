import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './assets/styles/global.css';
// в index можно подключить tailwind, а reset это потом когда буду на модули переходить надо будет проверить и применить по идее
// import './index.css';
// import './reset.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
