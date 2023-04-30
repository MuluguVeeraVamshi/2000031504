import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Train from './Train.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Train/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
