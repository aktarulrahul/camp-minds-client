import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import MenuBar from './components/MenuBar/MenuBar';
import Home from './pages/Home/Home';
import AllCamps from './pages/AllCamps/AllCamps';
import CampDetails from './pages/CampDetails/CampDetails';
import SignInUP from './pages/SignInUP/SignInUP';
import Admin from './pages/Admin/Admin';
import UserDetails from './pages/UserDetails/UserDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/camps">
            <AllCamps />
          </Route>
          <Route path="/sign-in-up">
            <SignInUP />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/camps/:campId">
            <CampDetails />
          </Route>
          <Route path="/users/:userId">
            <UserDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
