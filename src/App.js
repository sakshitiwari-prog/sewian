import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Home from './Components/Home';
// import '../Style/Navbar.css'
import Signin from './Components/Signin';
function App() {
  return (
    <Router>
      {/* <Home></Home> */}
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='/Register/signin' element={<Signin></Signin>}></Route>
        </Routes>
      {/* </Router> */}
    </Router>
  );
}

export default App;
