import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Events from './components/Events';
import FeaturesCause from './components/FeaturesCause';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsFeeds from './components/NewsFeeds';
import AllEvents from './Pages/AllEvents';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>          
          <Route path="/home"><Homepage></Homepage></Route>          
          <Route path="/events"><AllEvents></AllEvents></Route>
          <Route path="/login"><Login></Login></Route>

        </Switch>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
