
import './App.css'
import Loginpage from './Loginpage';
import Re from './Re.js';
import  Home  from './Home.js';
import Like from './Like.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hotel from './Hotel';
import Categery from './Categery.js';
import Currentoffer from './Currentoffer.js';
import Summa from './Summa.js'
import Hotelform from './Hotelform';
import Feedback from './Feedback'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Loginpage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Hotel' element={<Hotel/>}></Route>
          <Route path='/Categery' element={<Categery/>}></Route>
          <Route path='/currentoffer' element={<Currentoffer/>}></Route>
          <Route path='/Re' element={<Re/>}></Route>
          <Route path='/Hotelform' element={<Hotelform/>}></Route>
          <Route path='/Feedback' element={<Feedback/>}></Route>
          </Routes>
          </div>
          </BrowserRouter>
    // <Summa/>
   
  );
}

export default App;
