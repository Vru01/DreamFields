import './App.css';
import {Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path='/' element={ <Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
