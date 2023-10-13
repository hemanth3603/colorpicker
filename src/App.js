import './App.css';
import Colorpicker from './components/Colorpicker';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div >
      <div>
        <Header></Header>
      </div>
      <Colorpicker></Colorpicker>
    </div>
  );
}

export default App;
