import MainPage from '../pages/MainPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SingleProductPage from '../pages/SingleProductPage';
import Page404 from '../pages/404';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/login'>
            <LoginPage/>
          </Route>
          <Route exact path='/'>
            <MainPage/>
          </Route>
          <Route exact path='/product/:productId'>
            <SingleProductPage/>
          </Route>
          <Route path='*'>
            <Page404/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
