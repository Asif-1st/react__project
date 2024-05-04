import './App.css';
import Blog from './components/Blog';
import CareerContent from './components/CareerContent';
import Contents from './components/Contents';
import Header from './components/Header';
import Heros from './components/Heros';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Heros/>
      <Contents/>
      <CareerContent/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
