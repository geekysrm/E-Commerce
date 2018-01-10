import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import NavBar1 from './components/App/NavBar';
import App from './App';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar1 />
            <Switch>
                <Route path="/" component={App} exact={true} />
            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
