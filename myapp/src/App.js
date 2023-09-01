import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>    
    <Navbar title="TextUtil3" AboutUs="AboutUs"></Navbar>
    <div className="container" my-3>
      <Textform heading="Enter the text to analys"/>
    </div>
    </>

      );
}

export default App;
