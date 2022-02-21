import './App.css';
import Events from './components/Events';
import FeaturesCause from './components/FeaturesCause';
import Header from './components/Header';
import NewsFeeds from './components/NewsFeeds';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeaturesCause></FeaturesCause>
      <Events></Events>
      <NewsFeeds></NewsFeeds>
    </div>
  );
}

export default App;
