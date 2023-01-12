import './App.css';
import Header from './components/header-footer/header';
import Footer from './components/header-footer/footer';
import Movie from './components/movie-page';
import Series from './components/series-page';
import Home from './components/home-page';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='dashboard'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
