import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing'
import MainNav from './components/navbar/MainNav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNav />
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
