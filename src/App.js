import './App.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Auth from './components/pages/Auth/Auth';
import Logout from './components/pages/Auth/logout';
import LandingPage from './components/pages/LandingPage/LandingPage';
import Dashboard from './components/pages/Dashboard/Dashboard';
import NotFound from './components/pages/NotFound/NotFound';
import i18n from './118n';
import MovingOverlay from './components/common/movingOverlay';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route
            path={['/auth']}
            exact
            render={(props) => <Auth {...props} />}
          />
          <Route
            path={['/forgetpassword']}
            exact
            render={(props) => <Auth page="forgetpassword" {...props} />}
          />
          <Route path="/logout" component={Logout} />
          <Route path="/notfound" exact component={NotFound} />
          <Route path={['/', '/home']} exact component={LandingPage} />
          <Route path={['/dashboard']} component={Dashboard} />
          <Redirect to="/notfound" />
        </Switch>
        <MovingOverlay />
      </div>
    </Provider>
  );
}

export default App;
