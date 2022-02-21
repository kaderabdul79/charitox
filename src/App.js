import './App.css';
import Events from './components/Events';
import FeaturesCause from './components/FeaturesCause';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsFeeds from './components/NewsFeeds';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FeaturesCause></FeaturesCause>
      <Events></Events>
      <NewsFeeds></NewsFeeds>
      <Footer></Footer>
    </div>
  );
}

export default App;
