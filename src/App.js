import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import MainNav from './components/navbar/MainNav'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
