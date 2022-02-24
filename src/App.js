import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllEvents from './Pages/AllEvents';
import Booking from './Pages/Booking';
import Event from './Pages/Event';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>          
          <Route path="/home"><Homepage></Homepage></Route>          
          <Route path="/events"><AllEvents></AllEvents></Route>
          {/* <PrivateRoute path="/booking"><Booking></Booking></PrivateRoute> */}
          <PrivateRoute path="/event"><Event></Event></PrivateRoute>
          <Route path="/login"><Login></Login></Route>
          <Route path="/signup"><Signup></Signup></Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>    
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
