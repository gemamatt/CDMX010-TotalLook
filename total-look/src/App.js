import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Principal from './Views/Principal/Principal';
import Products from './Products';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Principal/>
      </div>
      <footer>
        <Footer/>
      </footer>
      <Products/>
    </div>
  );
}

export default App;
