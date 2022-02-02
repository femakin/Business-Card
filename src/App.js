
import './App.css';
import Info from './components/Info';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Info/>
   
     </BrowserRouter>
    </div>
  );
}

export default App;
