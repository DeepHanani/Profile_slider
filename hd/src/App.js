import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import RiviewSlider from './Components/RiviewSlider';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path='/' element = {<Registration/>}></Route>
           <Route path='/Login' element = {<Login/>}></Route>
           <Route path='/Riviewslider' element = {<RiviewSlider/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
