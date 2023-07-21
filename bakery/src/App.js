import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import NavBar from './components/NavBar'

import Cart from './Pages/Cart'
import Main from './Pages/Main'
import Details from './Pages/RecipeDetails'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />


        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route path="/recipe" element={<Details />} /> */}
          <Route path="/recipe/:type" element={<Main />} />
          <Route path="/recipe/detail/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          

        </Routes>
      </Router>



    </div>
  );
}

export default App;
library.add(fab, fas, far)

