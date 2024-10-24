import './App.css';
import {Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Homepage from './pages/Homepage';
import Login from './components/Login.jsx' ;
import  Signup from './components/Signup.jsx' ;

import Quiz from './components/Quiz/QuizPage.jsx';
import Temp from './pages/Dashboard.jsx'
import Astronomy from './components/Astronomy/Astronomy.jsx'

function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path='/' element={ <Homepage />} />  
        <Route path='/login' element= {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/quiz' element= {<Quiz />} />
        <Route path='/dashboard' element={<Temp />} />
        <Route path='/astronomy' element= {<Astronomy />} />
      </Routes>
    </div>
  );
}

export default App;
