import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllEvents from './Pages/AllEvents';
import Donate from './Pages/Donate';
import Event from './Pages/Event';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import News from './Pages/News';
import Signup from './Pages/Signup';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>          
          <Route path="/home"><Homepage></Homepage></Route>          
          <Route path="/events"><AllEvents></AllEvents></Route>
          <PrivateRoute path="/event"><Event></Event></PrivateRoute>
          <Route path="/news"><News></News></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/signup"><Signup></Signup></Route>
          <Route path="/donate"><Donate></Donate></Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>    
    </div>
  );
}

export default App;
