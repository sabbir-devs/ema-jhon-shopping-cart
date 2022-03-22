import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className='content'><Content></Content></div>
        <Shop></Shop>
    </div>
  );
}

export default App;
