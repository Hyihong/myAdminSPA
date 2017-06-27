//import 'babel-polyfill'
import reactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/shared/App.jsx'
import '../style/cover.less'

const renderProps =  window.__INITIAL_STATE__;

reactDOM.render((
        <Router>
             <App { ...renderProps }/>
        </Router>
 ),document.getElementById('app'));