import './App.css';
import Events from './components/Events';
import FeaturesCause from './components/FeaturesCause';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeaturesCause></FeaturesCause>
      <Events></Events>
    </div>
  );
}

export default App;
