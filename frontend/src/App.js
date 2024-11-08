import './App.css';
import {Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Homepage from './pages/Homepage';
import Login from './components/Login.jsx' ;
import  Signup from './components/Signup.jsx' ;
import Quiz from './components/Quiz/QuizPage.jsx';
import Temp from './pages/Dashboard.jsx'
import Astronomy from './components/Astronomy/Astronomy.jsx'
import Loader from './components/Loaders/Loader1.jsx';
import Quiz2 from './components/Quiz/quiz.jsx';

import Courses from './pages/courses.jsx'

function App() {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
       // Whether animation should only happen once or every time
    });
  }, []);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path='/' element={ <Homepage />} />  
        <Route path='/login' element= {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/quiz' element= {<Quiz />} />
        <Route path='/dashboard' element={<Temp />} />
        <Route path='/astronomy' element= {<Astronomy />} />


        <Route path='/loader' element= {<Loader />} />
        <Route path='/demo' element= {<Quiz2 />} />

        <Route path='dash' element= {<Courses />} />

      </Routes>
    </div>
  );
}

export default App;
