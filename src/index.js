import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducer from './reducers'


const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))

window.store = store;

ReactDOM.render(

    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
