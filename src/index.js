
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Listado from './components/Listado';
import Home from './pages/Home';

ReactDOM.render(
    <Provider store={store}>
    <AppRouter />,
    </Provider>,
    document.getElementById('root')
);