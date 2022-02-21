import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Events from './components/Events';
import FeaturesCause from './components/FeaturesCause';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsFeeds from './components/NewsFeeds';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home"><Homepage></Homepage></Route>          
          <Route path="/events"><Events></Events></Route>

        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
