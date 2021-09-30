import './App.scss';
import {Redirect, Route, Switch} from 'react-router-dom';
import Auth from './components/pages/Auth/Auth';
import Logout from './components/pages/Auth/logout';
import LandingPage from './components/pages/LandingPage/LandingPage';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App vh-100">
      <Switch>
        <Route
          path={['/login']}
          exact
          render={(props) => <Auth page="login" {...props} />}
        />
        <Route
          path={['/register']}
          exact
          render={(props) => <Auth page="register" {...props} />}
        />
        <Route
          path={['/forgetpassword']}
          exact
          render={(props) => <Auth page="forgetpassword" {...props} />}
        />
        <Route path="/logout" component={Logout} />
        <Route path="/notfound" exact component={NotFound} />
        <Route path={['/', '/home']} exact component={LandingPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default App;
