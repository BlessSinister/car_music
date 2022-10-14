import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Slider from './Slider'
import Guarantee from './Guarantee'
import Services from './Sevices';
import Аdvantages from './Аdvantages'
import OurWorks from './OurWorks';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Slider />
      <Guarantee />
      <Services />
      <Аdvantages />
      <OurWorks />
      <Footer />
    </div>
  );
}

export default App;
