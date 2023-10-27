import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Car from './pages/Car';
import Cycle from './pages/Cycle'
import Bike from './pages/Bike';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Car></Car>}></Route>
      <Route exact path='/cycle' element={<Cycle></Cycle>}></Route>
      <Route exact path='/bike' element={<Bike></Bike>}></Route>
    </Routes>
    </>
  );
}

export default App;
