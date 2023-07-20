
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
import Onedaytripplan from './Onedaytripplan'
import Maduraionedaytrip from './Maduraionedaytrip'
import Kanniyakumarione from './Kanniyakumarione'
import Chennaiondaytrip from './Chennaiondaytrip'
import Childrentrip from './Childrentrip'
import Educationtrip from './Educationtrip'
import Familytrip from './Familytrip'

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
          <Route path='/Onedaytripplan' element={<Onedaytripplan/>}></Route>
          <Route path='/Maduraionedaytrip' element={<Maduraionedaytrip/>}></Route>
          <Route path='/Kanniyakumarione' element={<Kanniyakumarione/>}></Route>
          <Route path='/Chennaiondaytrip' element={<Chennaiondaytrip/>}></Route>
          <Route path='/Childrentrip' element={<Childrentrip/>}></Route>
          <Route path='/Educationtrip' element={<Educationtrip/>}></Route>
          <Route path='/Familytrip' element={<Familytrip/>}></Route>
          </Routes>
          </div>
          </BrowserRouter>
    // <Summa/>
   
  );
}

export default App;
