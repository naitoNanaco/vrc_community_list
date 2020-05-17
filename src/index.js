import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <h1>VRChatコミュニティリスト</h1>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfarK2mEykbP4g7mz-_Wq14j62NHK5rw_Zw-YFNYysELntJIQ/viewform?usp=sf_link">登録フォーム</a><br/>
    <div>Unity Prefab： https://xxxxxxxxx </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
