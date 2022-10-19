import logo from './logo.svg';    
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
  <Navbar />
  <Main />
  <Cards />
  <Footer />
    </div>
  );
}

export default App;
